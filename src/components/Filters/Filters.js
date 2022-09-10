import React from "react";
import Gender from "../Filters/Categories/Gender"
import Species from "../Filters/Categories/Species"
import Status from "../Filters/Categories/Status"


const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);    
  };
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs4- mb-2">Filter</div>
      <div
      onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline">
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