import React from "react";

const MovieReview =({title, summary}) => {
    return(
        <div className="movie-review">
        <h3>{title}</h3>
        <p>{summary}</p>
        </div>
    )
}

export default MovieReview