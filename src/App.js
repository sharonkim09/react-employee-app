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
    filteredEmployees:[]
  };

  // When this component mounts, search the RandomUserGenerator API for pictures of kittens
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({ employees: res.data.results,
        filteredEmployees:res.data.results
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ search: event.target.value })
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.employees.filter(employee => {
        // merge data together, then see if user input is anywhere inside
        const { first: firstName, last: lastName } = employee.name;
        const name = `${firstName} ${lastName}`;
        return name.toLowerCase().includes(filter.toLowerCase().trim());
    });
    this.setState({ filteredEmployees: filteredList });
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
        {this.state.filteredEmployees.map((employee, id) => (
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
