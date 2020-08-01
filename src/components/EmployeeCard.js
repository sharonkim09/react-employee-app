import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="col-3">
          <p>
            {props.firstName} {props.lastName}
          </p>
        </div>
        <div className="col-3">
          <p>{props.phoneNumber}</p>
        </div>
        <div className="col-3">
          <p>{props.email}</p>
        </div>
        <div className="col-2">
          <p>{props.dob}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
