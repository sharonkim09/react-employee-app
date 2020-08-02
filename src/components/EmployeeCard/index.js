import React from "react";
import Moment from "react-moment";
import "./style.css";
// rendering data for employees
const EmployeeCard = (props) => {
  return (
    <tr>
      <td>
        <img className="rounded-circle" alt={props.name} src={props.image} />
      </td>
      <td>
        {props.firstName} {props.lastName}
      </td>
      <td>{props.phoneNumber}</td>
      <td>{props.email}</td>
      <td>
        <Moment format="MM/DD/YYYY">{props.dob}</Moment>
      </td>
    </tr>
  );
};

export default EmployeeCard;
