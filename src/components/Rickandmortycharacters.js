import React from "react";

const Characters = ({characters = []}) => {
    return (
        <div className="row">            
                {
                    characters.map((item, index) => (
                        <div key={index} className="col">
                            <div className="card" style={{minWidth: "200px"}}>
                                <img src={item.image} alt={item.name}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <hr />
                                    <p>Location: {item.location.name}</p>
                                </div>
                             </div>
                        </div>
                    ))}

            </div>
        
    )
}

export default Characters