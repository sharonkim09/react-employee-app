import React from "react";
import "./style.css";
// rendering heading
const Heading = () => {
  return (
    <div className="jumbotron">
      <h1 className="text-center">Employee Directory</h1>
      <p className=" lead text-center">
        Click on name to alphabetize names or use the search box to narrow your
        results.
      </p>
    </div>
  );
};

export default Heading;
