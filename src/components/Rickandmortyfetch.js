import { useEffect, useState } from "react";
import Characters from "./Rickandmortycharacters";
import Pagination from "./Pagination";

function Rickandmortyfetch() {

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});

    const URL_FETCH = "https://rickandmortyapi.com/api/character";

    const fetchCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);})
            .catch(error => console.log(error))
    };

    const onPrevious = () => {
        fetchCharacters(info.prev)

    }

    const onNext = () => {
        fetchCharacters(info.next)
    }
    useEffect(()=>{
        fetchCharacters(URL_FETCH);
    }, [])

    return (
        <div>
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
            <Characters characters={characters} />
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        </div>
    )
}


export default Rickandmortyfetch;