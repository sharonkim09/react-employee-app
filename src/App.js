import React, { Component } from "react";
import ContentHead from "./components/ContentHead";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
import Heading from "./components/Heading";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
  state = {
    search: "",
    employees: [],
    result:[]
  };

  // When this component mounts, search the RandomUserGenerator API for pictures of kittens
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

  handleInputChange = event => {
this.setState({
  search:event.target.value
})
  }

  render() {
    return (
      <>
        <Heading />
        <SearchForm 
        value={this.state.search}
       handleInputChange={this.handleInputChange}
       />
        <ContentHead />
        {this.state.employees.map((employee, id) => (
          <EmployeeCard 
          key={id}
          image={employee.picture.thumbnail} 
          firstName={employee.name.first}
          lastName={employee.name.last}
          phoneNumber={employee.phone}
          email={employee.email}
          dob={employee.dob.date}/>
        ))}
      </>
    );
  }
}

export default App;
