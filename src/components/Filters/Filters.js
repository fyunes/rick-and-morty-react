import React from "react";
import Gender from "../Filters/Categories/Gender"
import Species from "../Filters/Categories/Species"
import Status from "../Filters/Categories/Status"


const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  const clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    unChecked();        
  };
  const unChecked = () => {
    const radioBtn = document.querySelectorAll("input[type='radio']");
    radioBtn.forEach(radioBtn => {
      if(radioBtn.checked===true)
      radioBtn.checked = false
    })
  }
  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className="text-center fw-bold fs4- mb-2 filter">Filter</div>
      <div
      onClick={clear}      
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline clear-filter">
        Clear Filter
      </div>
      <div className="accordion mt-2" id="accordionExample">      
      <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
      <Gender setGender={setGender} setPageNumber={setPageNumber} />  
      
      </div>
    </div>
  );
};

export default Filters