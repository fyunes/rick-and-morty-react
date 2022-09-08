import React from "react";

const Search = () => {
    return (
        <form className="d-flex justify-content-center gap-4 mb-5">
            <input placeholder="Search For Characters" type="text" className="searchBar" />
            <button className="searchBtn btn btn-primary fs-5">Search!</button>        
        </form>)
}

export default Search;