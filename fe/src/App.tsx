import React from "react";
import { SearchFilter } from "./filter-components/SearchFilter";
import "./App.css";
import { ColorsFilter } from "./filter-components/ColorsFilter";
import { VRScansList } from "./vr-scans-list/VRScansList";

function App() {
  return (
    <div className="App">
      <div style={{ gridArea: "header" }}>
        <h1>VR SCANS App</h1>
      </div>
      <div style={{ gridArea: "filters" }}>
        <ColorsFilter></ColorsFilter>
      </div>

      <div style={{ gridArea: "list" }}>
        <SearchFilter></SearchFilter>
        <VRScansList></VRScansList>
      </div>
    </div>
  );
}

export default App;
