import React from 'react';
import SearchResultContainer from "./components/SearchResultContainer"
function App() {
  return (
    <div className="App">
    <h1 className="text-center">Employee Directory</h1>
    <p className="text-center">Click on controls to filter by heading or use the search box to narrow your results.</p>
    <SearchResultContainer/>
    </div>
  );
}

export default App;
