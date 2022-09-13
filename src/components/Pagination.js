import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({info, pageNumber, setPageNumber }) => {   
    let [ width, setWidth] = useState(window.innerWidth);    
    let updateDimension = () => {
        setWidth(window.innerWidth);
    };
    useEffect(()=> {
        window.addEventListener("resize", updateDimension);
        return () => window.removeEventListener("resize", updateDimension)
    }, []); 
    return (        
        <ReactPaginate
        className="pagination justify-content-center gap-2 my-4"
        nextLable="Next"
        previousLabel="Prev"
        nextClassName="btn btn-primary rnm-next"
        previousClassName="btn btn-primary rnm-prev"
        pageClassName="page-item"
        pageLinkClassName="page-link rnm-pageLink"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(data)=> {setPageNumber(data.selected + 1)}}
        pageCount={info?.pages}
        forcePage= {pageNumber===1? 0 : pageNumber -1} />);        
};

export default Pagination;