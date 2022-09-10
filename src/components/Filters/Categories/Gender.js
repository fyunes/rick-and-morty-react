import React from "react";
import FilterBtn from "../FilterBtn";

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"]
    return (
        <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-1">
        {genders.map((items, index)=>(
          <FilterBtn task={setGender} setPageNumber={setPageNumber} key={index} name="gender" index={index} items={items} />
        ))}
        
      </div>
    </div>
  </div>
    )
}


export default Gender