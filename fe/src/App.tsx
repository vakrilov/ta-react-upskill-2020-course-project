import React from "react";
import { SearchFilter } from "./filter-components/SearchFilter";
import "./App.css";
import { ColorsFilter } from "./filter-components/ColorsFilter";

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <SearchFilter></SearchFilter>
      <ColorsFilter></ColorsFilter>
    </div>
  );
}

export default App;
