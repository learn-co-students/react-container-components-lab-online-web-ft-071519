import React from "react";

const MovieReview = ({title, summary}) => {
    return (
        <div className="review">
            <h2>{ title }</h2>
            <p>{ summary }</p>
        </div>
    )
}

export default MovieReview