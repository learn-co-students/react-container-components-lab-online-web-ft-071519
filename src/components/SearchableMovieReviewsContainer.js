import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const base_URL = "https://api.nytimes.com/svc/movies/v2/reviews"
const query_URL = "/search.json?query="
const API_KEY = "1qVtRBVzIr01GjVg5Gtevpq7FvHGAoOt"
const NYT_API_KEY = `api-key=${API_KEY}`

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({
            searchTerm: event.target.value
        });
        console.log("handleChange", this.state.searchTerm)
    }

    submitSearch(event) {
        event.preventDefault()
        fetch(base_URL + query_URL + `${this.state.searchTerm}` + "&" + NYT_API_KEY)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
            console.log("submitSearch", data.reviews)
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.submitSearch.bind(this)} >
                    <input onChange={this.handleChange.bind(this)} type="text"></input>
                    <input type="submit"/>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
