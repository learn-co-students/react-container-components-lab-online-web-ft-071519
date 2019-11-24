import React from "react";

const Search = ({submithandling, changeHandling}) => {
    return (
    <form onSubmit={event => submithandling(event)}>
    <input onChange={event => changeHandling(event)} type="text"></input>
    <button type="submit">Search</button>
    </form>)
}

export default Search