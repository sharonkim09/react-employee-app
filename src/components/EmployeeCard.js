import React from 'react';

const EmployeeCard = (props) => {
    return (
        <div className="row">
        <div className="col-1">
          <img alt={props.name} src={props.image}/>
        </div>
      </div>
    );
};

export default EmployeeCard;