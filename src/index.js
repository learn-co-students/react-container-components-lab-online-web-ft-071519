import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import SearchForm from './components/SearchForm';

ReactDOM.render(
    <div className="app">
        <SearchForm />
        <SearchableMovieReviewsContainer />
        <LatestMovieReviewsContainer />

    </div>,
    document.getElementById('root')
);