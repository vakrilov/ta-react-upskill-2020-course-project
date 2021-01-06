import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilter, Store } from "../store/store";

export const SearchFilter: React.VFC = () => {
  const filter = useSelector((store: Store) => store.searchFilter);
  const dispatch = useDispatch();
  const onFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchFilter(e.target.value));

  return (
    <div>
      search: <input type="text" value={filter} onChange={onFilter} />
    </div>
  );
};
