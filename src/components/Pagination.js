import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({info, pageNumber, setPageNumber }) => {    
    return (<ReactPaginate
        className="pagination justify-content-center gap-2 my-4"
        nextLable="Next"
        previousLabel="Prev"
        nextClassName="btn btn-primary"
        previousClassName="btn btn-primary"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        onPageChange={(data)=> {setPageNumber(data.selected + 1)}}
        pageCount={info?.pages}
        forcePage= {pageNumber===1? 0 : pageNumber -1} />);        
};

export default Pagination;
