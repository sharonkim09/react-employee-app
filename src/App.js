import React, { Component } from "react";
import ContentHead from "./components/ContentHead";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";

class App extends Component {
  state = {
    search: "",
    employees: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({ employees: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h1 className="text-center">Employee Directory</h1>
        <p className="text-center">
          Click on controls to filter by heading or use the search box to narrow
          your results.
        </p>
        <SearchForm />
        <ContentHead />
      </>
    );
  }
}

export default App;
