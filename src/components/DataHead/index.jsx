import React from "react";

// rendering col headings
const SearchResultContainer = (props) => {
  return (
    <thead id="tableSize">
      <th id="moveImage">Image</th>
      <th onClick={props.sortName}>Name </th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </thead>
  );
};

export default SearchResultContainer;
