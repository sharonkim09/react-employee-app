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
            <button className="btn btn-primary" type="button" onClick={props.sortName}>
            Name Sort
            </button>
        </>
    );
};

export default SearchForm;