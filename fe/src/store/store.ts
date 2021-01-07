import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { filterMiddleware, logger } from "./middlewares";
import {
  colorsReducer,
  searchFilterReducer,
  vrScansReducer,
  pageReducer,
} from "./reducers";
import { Store } from "./types";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<Store, any, {}, {}>(
  combineReducers({
    searchFilter: searchFilterReducer,
    colors: colorsReducer,
    vrScans: vrScansReducer,
    page: pageReducer,
  }),
  composeEnhancers(applyMiddleware(logger, thunk, filterMiddleware))
);

export default store;
