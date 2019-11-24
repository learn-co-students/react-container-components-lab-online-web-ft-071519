import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import Search from './Search'

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchword: ""
    }
    
    handleChange = (event) =>  {
        this.setState({
            searchword: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchword}`)
            .then(response => response.json())
            .then(reviewData => 
                this.setState({reviews: reviewData.results})
            )
    }

    render(){
        return(
            <div>
                <Search submitHandling={this.handleSubmit} changeHandling={this.handleChange}/>
                <div className="searchable-movie-reviews">
                <MovieReviews movieReviews={this.state.reviews}/>
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer