import React from "react";

const MovieReview =({title, summary, key}) => {
    return(
        <div className="movie-review" key={key}>
        <h3>{title}</h3>
        <p>{summary}</p>
        </div>
    )
}

export default MovieReview