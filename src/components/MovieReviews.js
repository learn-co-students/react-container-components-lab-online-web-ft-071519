import React from 'react';

// Code MovieReviews Here
const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map(review => {
                return(
                <div className="review" key={review.headline}>
                    <a href={review.link.url} >{review.headline}</a>
                    <span>{review.byline}</span>
                    <div>{review.summary_short}</div>
                </div>)
            })}
        </div>
    )
};
export default MovieReviews;