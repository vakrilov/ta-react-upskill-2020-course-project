import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { setSearchFilter, Store } from "./store/store";

function App() {
  const filter = useSelector((store: Store) => store.searchFilter);
  const dispatch = useDispatch();
  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchFilter(e.target.value));

  return (
    <div className="App">
      <h1>My App</h1>
      <div>
        <input type="text" value={filter} onChange={onFilter} />
      </div>
      <div>{filter}</div>
    </div>
  );
}

export default App;
