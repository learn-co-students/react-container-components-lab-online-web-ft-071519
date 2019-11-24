import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import SearchableMovieReviewsContainer from './MovieReviews'


class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }
   
    componentDidMount(){
        const NYT_API_KEY = 'MJJpUaH9EMiGNiaGAFfuFtVTf33ufSmG';
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
                + `api-key=${NYT_API_KEY}`;
        console.log(URL)
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
            {/* <SearchableMovieReviewsContainer serchablemovies={this.state.reviews}/> */}
            <MovieReviews movieReviews={this.state.reviews}/>
            </div>
        )}
}

export default LatestMovieReviewsContainer
