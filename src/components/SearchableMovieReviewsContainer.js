import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import Search from './Search'

const NYT_API_KEY = 'NB5y1L6c8MBmzxGWbvY08ewd7vrjZGtg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    submitHandler = (event) => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(response => response.json())
            .then(reviewData => 
                this.setState({reviews: reviewData.results})
            )
    }

    changeHandler = event => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <div>
                <Search submitHandler={this.submitHandler} changeHandler={this.changeHandler} />

                <div className="searchable-movie-reviews">
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer