import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';

const base_URL = "https://api.nytimes.com/svc/movies/v2/reviews/all.json?"
const API_KEY = "1qVtRBVzIr01GjVg5Gtevpq7FvHGAoOt"
const NYT_API_KEY = `api-key=${API_KEY}`

class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        console.log("I did mount.")
        fetch(base_URL + NYT_API_KEY)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <SearchableMovieReviewsContainer />
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer