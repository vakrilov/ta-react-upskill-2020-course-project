import React from "react";
import { SearchFilter } from "./filter-components/SearchFilter";
import "./App.css";
import { ColorsFilter } from "./filter-components/ColorsFilter";
import { VRScansList } from "./vr-scans-list/VRScansList";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>VR Scans App</h1>
      </div>
      <div className="filters">
        <ColorsFilter></ColorsFilter>
      </div>

      <div className="list">
        <SearchFilter></SearchFilter>

        <VRScansList></VRScansList>
      </div>
    </div>
  );
}

export default App;
