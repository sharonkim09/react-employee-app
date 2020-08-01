import React from 'react';
import SearchResultContainer from "./components/SearchResultContainer"
import SearchForm from "./components/SearchForm"
function App() {
  return (
    <div className="App">
    <h1 className="text-center">Employee Directory</h1>
    <p className="text-center">Click on controls to filter by heading or use the search box to narrow your results.</p>
    <SearchForm/>
    <SearchResultContainer/>
    </div>
  );
}

export default App;
