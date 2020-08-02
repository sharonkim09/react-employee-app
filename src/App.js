import React, { Component } from "react";
import DataHead from "./components/DataHead";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
import "./App.css"
// import Heading from "./components/Heading/index";
import EmployeeCard from "./components/EmployeeCard";
import Home from "./components/pages/Home"
class App extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    sortedName: true,
  };

  // When this component mounts, search the RandomUserGenerator API for pictures of kittens
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
// function to handle the change in input and looks for employees with what is in the input
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value });
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.employees.filter((employee) => {
      // merge data together, then see if user input is anywhere inside
      const { first: firstName, last: lastName } = employee.name;
      const name = `${firstName} ${lastName}`;
      return name.toLowerCase().includes(filter.toLowerCase().trim());
    });
    this.setState({ filteredEmployees: filteredList });
  };
// function to alphabetize first names of employees
  sortName = () => {
    let currentEmployees = this.state.employees;
    if (this.state.sortedName=== true) {
      currentEmployees.sort((a, b)=> {
        if (a.name.first.toLowerCase()< b.name.first.toLowerCase()) return -1;
        return 0;
      });
      this.setState({ employees: currentEmployees, sortedName: false });
    } else {
      currentEmployees.sort((a, b) =>{
        if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) return -1;
        return 0;
      });
      this.setState({ employees: currentEmployees, sortedName: true });
    }
  };

  render() {
    return (
      <>
        <Home />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          sortName={this.sortName}
        />
        <table>
        <DataHead />
        {this.state.filteredEmployees.map((employee, id) => (
          <EmployeeCard
            key={id}
            image={employee.picture.medium}
            firstName={employee.name.first}
            lastName={employee.name.last}
            phoneNumber={employee.phone}
            email={employee.email}
            dob={employee.dob.date}
          />
        ))}
        </table>
      </>
    );
  }
}

export default App;
