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
        const NYT_API_KEY = 'MJJpUaH9EMiGNiaGAFfuFtVTf33ufSmG';
        const SEARCHURL =  `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchword}`;
        event.preventDefault()
        fetch(SEARCHURL)
            .then(response => response.json())
            .then(reviewData => 
                this.setState({reviews: reviewData.results})
            )
    }

    render(){
        console.log(this.state.searchword)
        console.log(this.state.reviews)

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