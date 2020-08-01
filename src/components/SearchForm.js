import React from 'react';

const SearchForm = ({handleInputChange}) => {
    return (
        <>
            <input 
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={event=>handleInputChange(event)}
            // value={props.value}
            />
    
        </>
    );
};

export default SearchForm;