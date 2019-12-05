import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
// will provide a searchable interface allowing the user to enter a search term and then receive a list of reviews that match the search term(s).
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    };

    handleSubmit = e => {
        e.preventDefault();

        fetch(`${URL}${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(movieData => this.setState({ reviews: movieData.results }));
    }
    handleSearchInput = e => {
        this.setState({ searchTerm: e.target.value });
    }
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search</label>
                    <input type="text" onChange={this.handleSearchInput} />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}