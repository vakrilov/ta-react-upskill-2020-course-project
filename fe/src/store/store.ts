import { Dispatch } from "react";
import {
  createStore,
  combineReducers,
  Reducer,
  applyMiddleware,
  compose,
  AnyAction,
} from "redux";
import thunk from "redux-thunk";

// Constants
const URL = "http://localhost:3000";
const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";
const INIT_COLORS = "INIT_COLORS";

// TYPES
export type Color = {
  id: number;
  hex: string;
};

// Actions
export const setSearchFilter = (value: string) => ({
  type: SET_SEARCH_FILTER,
  value,
});

export const initColors = (value: Color[]) => ({
  type: INIT_COLORS,
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

const colorsReducer: Reducer<Color[]> = (state = [], action) => {
  switch (action.type) {
    case INIT_COLORS:
      return action.value;
    default:
      return state;
  }
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    searchFilter: searchFilterReducer,
    colors: colorsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// INIT
const dispatch = store.dispatch as any;

const fetchColors = async (dispatch: Dispatch<AnyAction>) => {
  const data = await fetch(`${URL}/colors`);
  const colors = await data.json();
  console.log("COLORS FETCHED", colors);
  dispatch(initColors(colors));
};
dispatch(fetchColors);

export type Store = ReturnType<typeof store.getState>;
export default store;
