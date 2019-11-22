import React from "react";

const MovieReviews = props => {
    console.log(props);
    let moviesArray = props;
    console.log(moviesArray)

    // if (moviesArray.length === 0) {console.log("Zero")
    // } else { console.log("There stuff here.")}
    
    let moviesList = []

    


    // // Did not break but moviesList has no values.
    // if (moviesArray.length > 0 && moviesArray.map) {
    //     moviesList = moviesArray.map(movie => <li>{movie.display_title}</li>);
    // }

    // // Nope:
    // if (moviesArray.length === 0) {
    //     moviesList = null
    // } else if (moviesArray.length > 0) {
    //     moviesList = moviesArray.map(movie => {
    //         <li>{movie.display_title}</li>
    //     })
    // }
    
    console.log(moviesList)

    return (
        <div className="review-list">
            <ul>
                {moviesList}
            </ul>
        </div>
    )
}

export default MovieReviews