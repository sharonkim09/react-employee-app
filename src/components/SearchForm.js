import React from 'react';

const SearchForm = (props) => {
    return (
        <>
            <input 
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={props.handleInputChange}
            value={props.value}
            />
    
        </>
    );
};

export default SearchForm;