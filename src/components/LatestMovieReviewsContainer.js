import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1qVtRBVzIr01GjVg5Gtevpq7FvHGAoOt';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            this.setState({
                searchResults: data.results
            })
        })
        .catch(error => console.log(error))
    }


    render() {
        // console.log(this.state)

        return (
            <div className="latest-movie-reviews">
                <MovieReviews searchResults={this.state.searchResults} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer