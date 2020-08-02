import React from "react";
import Moment from 'react-moment';
// import style from "./style.css"
// rendering data for employees
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
          <Moment format="MM/DD/YYYY">{props.dob}</Moment>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;