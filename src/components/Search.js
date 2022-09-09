import React from "react";

const Search = ({setPageNumber, setSearch}) => {
    return (
        <form className="d-flex justify-content-center gap-4 mb-5">
            <input
            onChange={charSearch=>{
                setPageNumber(1);
                setSearch(charSearch.target.value);
            }}
             placeholder="Search For Characters" 
             type="text"
             className="searchBar" />
            <button onClick={reload=>{reload.preventDefault()}} className="searchBtn btn btn-primary fs-5">Search!</button>        
        </form>)
}

export default Search;
