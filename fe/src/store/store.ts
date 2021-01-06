import { createStore, combineReducers, Reducer } from "redux";

// Constants
const SET_SEARCH_FILTER = "setSearchFilter";

// Actions
export const setSearchFilter = (value: string) => ({
  type: SET_SEARCH_FILTER,
  value,
});

// Reducers
const searchFilterReducer: Reducer<string> = (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return action.value;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    searchFilter: searchFilterReducer,
  })
);

export type Store = ReturnType<typeof store.getState>;

export default store;
