import React from "react";

const Search = ({submitHandler, changeHandler}) => (
    <form onSubmit={event => submitHandler(event)}>
        <label>Search for Movie</label>
        <input onChange={event => changeHandler(event)} type="text"></input>
        <button type="submit">Search</button>
    </form>
)

export default Search