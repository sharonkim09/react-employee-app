import React from "react";
// rendering col headings
const SearchResultContainer = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <h4>Image</h4>
        </div>
        <div className="col-3">
          <h4>Name</h4>
        </div>
        <div className="col-3">
          <h4>Phone</h4>
        </div>
        <div className="col-3">
          <h4>Email</h4>
        </div>
        <div className="col-2">
          <h4>DOB</h4>
        </div>
      </div>
    </div>
  );
};

export default SearchResultContainer;
