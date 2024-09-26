import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super();

        this.state = { reviews: [] };
    }

    fetchMovies = () => {
        fetch(URL)
            .then(response => response.json())
            .then(d =>
                // console.log(d.results)
                this.setState({ reviews: d.results })
            )

    }

    componentDidMount() {
        this.fetchMovies()

    }

    render() {


        return <div className="latest-movie-reviews">


            <MovieReviews reviews={this.state.reviews} />

            {/* {console.log(this.state.reviews)} */}
            {/* {this.state.reviews.map(p => <MovieReviews title={p.display_title} url={p.link.url} />)} */}
        </div>
    }
} 