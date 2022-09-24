import 'bootstrap/dist/js/bootstrap'
import { useEffect, useState } from "react";
import Characters from "./Rickandmortycharacters";
import Pagination from "./Pagination";
import Search from "./Search";
import Filters from "./Filters/Filters"


function Rickandmortyfetch() {

    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("");
    let [species, setSpecies] = useState("");
    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;
    let [loading, setLoading] = useState(false);


    let URL_API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        (async function () {
            setLoading(true)
            let data = await fetch(URL_API).then(res => res.json())
            .catch(err => {
            console.log(err.message)
        })
            updateFetchedData(data);
            setLoading(false)
            

        })()
        
    }, [URL_API]);
    
    

    return (

        <div className="main-characters">
            
            <Search setPageNumber={setPageNumber} setSearch={setSearch} />

            <div className="container">
                <div className="row rnm-row">
                    <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber} />
                    <div className="col-lg-8 col-12">
                        <div className="row rnm-row">                            
                            {loading ? (<div className="spinner-border m-5 rnm-spinner" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div> ) : <Characters results={results} /> 
                              }
                        </div>
                    </div>
                </div>
            </div>
            <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>

    )

}

export default Rickandmortyfetch;