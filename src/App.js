import React, { Component } from "react";
import ContentHead from "./components/ContentHead";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
import Heading from "./components/Heading";
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
        <Heading />
        <SearchForm />
        <ContentHead />
      </>
    );
  }
}

export default App;
