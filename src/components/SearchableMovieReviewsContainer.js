import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'IiNB7z5wuVE3jQ6NY8l77edFIqvtfNhN';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here



export default class SearchableMovieReviewsContainer extends React.Component {
    state = {
        reviews: [],
        searchTerm: ""
    };

    fetchMovies = () => {
        fetch(URL)
            .then(response => response.json())
            .then(d =>
                //  console.log(d.results)
                this.setState({ reviews: d.results })
            )

    }

    handleSubmit = e => {
        e.preventDefault();
        this.fetchMovies()

    };

    handleInputChange = e => {
        this.setState({
            [e.target.id]:
                e.target.value
        });
    };

    render() {
        return <div >

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="searchTerm">Enter A search Term: </label>{" "}
                <input
                    id="searchTerm"
                    value={this.state.searchTerm}
                    onChange={this.handleInputChange}
                />
                <br />

                <input type="submit" />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }
}