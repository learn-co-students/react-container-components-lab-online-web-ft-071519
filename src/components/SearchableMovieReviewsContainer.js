import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Oi0lF6YecsV1193R4jUaufu387ReWhOG';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = (e) => {
    let search = e.target.value.replace(' ', '_')
    this.setState({
      searchTerm: search
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newURL = URL + `&query=` + this.state.searchTerm
    fetch(newURL)
      .then(response => response.json())
      .then(movieData => this.setState({
        reviews: movieData.results
      }))
      .catch(err => console.log(err.message))
  }


  render() {
    return (
      <div className={'searchable-movie-reviews'}>
        <form onSubmit={this.handleSubmit}>
          <input type={'text'} placeholder={'Search'} onChange={this.handleChange}/>
          <button type={'submit'}>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>

      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
