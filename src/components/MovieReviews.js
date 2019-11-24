import React from "react";
import MovieReview from "./MovieReview";



const MovieReviews = ({movieReviews}) => {
    return (
        <div className="review-list">
        {movieReviews.map((movieReview, i) => (<MovieReview title={movieReview.display_title} summary={movieReview.summary_short} key={i}/>))}
        </div>
    )
}

export default MovieReviews