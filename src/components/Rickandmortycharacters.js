import React from "react";

const Characters = ({results}) => {
    let display;

    if (results) {
        display = results.map(character=>{
            let {id, name, image, location, status} = character;
            return( 
            <div key={id} className="col-lg-4 col-md-6 col-12 mb-3 position-relative">
                <div className="cards d-flex flex-column justify-content-center">
                    <img src={image} alt={image} className="img-fluid" />
                    <div className="content rnm-info">
                        <div className="fs-4 fw-bold">{name}</div>
                        <div className="">
                            <div className="fs-6">Last location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>                    
                </div>
                {(()=> {
                    return (
                        <div
                            className={`badge position-absolute
                            ${status === "Alive" && "bg-success"}
                            ${status === "Dead" ? "bg-danger" : "bg-secondary"}`}>
                            {status}</div>);
                        }
                )()}                                
            </div>)
        })
    } else {
            display = <img src="img/404_nocharfound_RickAndMorty.png" alt="404 No Character Found"/>
        }
    
    return <div className="row">{display}</div>;
};

export default Characters