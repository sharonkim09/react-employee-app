import React from "react";
import "./style.css"
const SearchForm = (props) => {
  return (
    <div className="form-group text-center">
      <input
        type="text"
        className="form text-center"
        placeholder="Search"
        onChange={props.handleInputChange}
        value={props.value}
      />
      <button
        className="btn-small btn-primary"
        type="button"
        id="nameBtn"
        onClick={props.sortName}
      >
        Sort Name
      </button>
    </div>
  );
};

export default SearchForm;
