// Code MovieReviews Here
import React from "react";


// const MovieReviews = props => <div className="review-list">

//     <a href={props.url}>{props.title}</a>
// </div>
// export default MovieReviews;

const MovieReviews = props => (

    <div className="review-list">

        <ul>
            {/* <a href={props.url}>{props.title}</a> */}
            {props.reviews.map(p =>

                <li>
                    <div className="review">
                        <span>{p.byline}</span>
                        <span>{p.headline}</span>
                        <span>{p.summary_short}</span>
                    </div>
                </li>

            )}


            {/* {console.log(props.reviews)} */}
        </ul>
    </div>
)
export default MovieReviews;