import React from "react";

const FilterBtn = ({index, name, items, task, setPageNumber}) => {
    return (
        <>
        <div>
            <style jsx>
                {`
                .checkedBtn:checked + label{
                    background-color: #0b5ed7;
                    color: white;
                }
                input[type="radio"]{
                    display: none; 
                }
                `}
            </style>
        </div>
        <div>
            <div className="form-check">
                <input onClick={()=> {
                    setPageNumber(1);
                    task(items);
                }} className="form-check-input checkedBtn" type="radio" name={name}id={`${name}-${index}`}/>
                <label class="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
            </div>    
        </div>
        </>
    )

}

export default FilterBtn