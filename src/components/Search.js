import React from "react";

const Search = ({submitHandling, changeHandling}) => {
    return (
    <form onSubmit={event => submitHandling(event)}>
    <input onChange={event => changeHandling(event)} type="text"></input>
    <button type="submit">Search</button>
    </form>)
}

export default Search