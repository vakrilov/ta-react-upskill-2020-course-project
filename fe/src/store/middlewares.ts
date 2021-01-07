import { Middleware } from "redux";
import { resetScans, setPage } from "./actions";
import { loadMoreScans } from "./async-actions";
import { Store } from "./types";

export const logger: Middleware<{}, Store, any> = (store) => (next) => (
  action
) => {
  console.log(action);
  console.log("BEFORE:", store.getState());
  next(action);
  console.log("AFTER:", store.getState());
};

export const filterMiddleware: Middleware<{}, Store, any> = (store) => (
  next
) => (action) => {
  const before = store.getState();
  next(action);
  const after = store.getState();

  // check if ANY filter change and start loading items form scratch
  if (before.searchFilter !== after.searchFilter) {
    console.log("Filters changed! Reset and load first chunk of data");
    store.dispatch(setPage(0));
    store.dispatch(resetScans());
    store.dispatch(loadMoreScans());
  }
};
