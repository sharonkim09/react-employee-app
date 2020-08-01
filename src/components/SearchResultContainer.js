import React, { Component } from "react";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
   API.search().then(res=>{
       console.log(res)
   });
  }

  render() {
    return (
      <div>
<h1>will this work?</h1>
      </div>
    );
  }
}

export default SearchResultContainer;