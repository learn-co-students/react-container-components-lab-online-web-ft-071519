import React from "react";
import MovieReview from "./MovieReview";

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map(review => <MovieReview title={review.display_title} summary={review.summary_short}/> )}
        </div>
    )
}

export default MovieReviews