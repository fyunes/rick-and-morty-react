import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { useEffect, useState } from "react";
import Characters from "./Rickandmortycharacters";
import Pagination from "./Pagination";

function Rickandmortyfetch() {

    let [pageNumber, setPageNumber] = useState(1);
    let [fetchedData, updateFetchedData] = useState([]);
    let {info, results} = fetchedData;
    
    
    let URL_API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    useEffect(()=>{
        (async function() {
            let data = await fetch(URL_API).then(res=>res.json())
            updateFetchedData(data);
            
        })()
    },[URL_API]);

    return (
        <>        
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h2>Placeholder</h2>
                </div>
                <div className="col-8">
                    <div className="row">
                        <Characters results={results}/>
                    </div>
                </div>                
            </div>
        </div>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>       
        
    )

}


export default Rickandmortyfetch;