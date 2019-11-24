import React from "react";

const MovieReviews = props => {
    
    let moviesArray = props.reviews;
    let moviesList = []

    if (moviesArray && moviesArray.map) {
        moviesList = moviesArray.map(movie => <li className="review" key={movie.display_title}>{movie.display_title}</li>);
    }

    return (
        <div className="review-list">
            <ul>
                {moviesList}
            </ul>
        </div>
    )
}

export default MovieReviews