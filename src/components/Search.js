import React from "react";

const Search = ({setPageNumber, setSearch}) => {
    return (
        <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-4 mt-4">
            <input
            onChange={charSearch=>{
                setPageNumber(1);
                setSearch(charSearch.target.value);
            }}
             placeholder="Search For Characters" 
             type="text"
             className="searchBar rnm-search" />
            <button onClick={reload=>{reload.preventDefault()}} className="searchBtn btn btn-primary fs-5">Search!</button>        
        </form>)
}

export default Search;