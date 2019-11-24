import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }
   
    componentDidMount(){
        const NYT_API_KEY = 'MJJpUaH9EMiGNiaGAFfuFtVTf33ufSmG';
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
                + `api-key=${NYT_API_KEY}`;
        fetch(URL)
        .then(resp => resp.json())
        .then(reviewData => this.setState({
            reviews: reviewData.results
        }))
        console.log(this.state.reviews)
    }

    render(){
        console.log(this.state.reviews)
        return(
            <div className="latest-movie-reviews">
            <MovieReviews movieReviews={this.state.reviews}/>
            </div>
        )}
}

export default LatestMovieReviewsContainer
