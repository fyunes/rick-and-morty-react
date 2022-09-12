import React from "react";

const FilterBtn = ({index, name, items, task, setPageNumber}) => {
    return (        
        <div>
            <div className="form-check">
                <input onClick={()=> {
                    setPageNumber(1);
                    task(items);
                }} className="form-check-input checkedBtn" type="radio" name={name}id={`${name}-${index}`}/>
                <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>{items}</label>
            </div>    
        </div>        
    )
}

export default FilterBtn