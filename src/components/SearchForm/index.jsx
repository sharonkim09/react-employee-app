import React from "react";
import "./style.css";
// rendering form with input and button
const SearchForm = (props) => {
  return (
    <div id="formArea">
      <div className="form-group text-center">
        <input
          type="text"
          className="form text-center"
          placeholder="Search Employee"
          onChange={props.handleInputChange}
          value={props.value}
        />
      </div>
    </div>
  );
};

export default SearchForm;
