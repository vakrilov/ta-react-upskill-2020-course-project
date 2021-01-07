import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Middleware,
} from "redux";
import thunk from "redux-thunk";
import { colorsReducer, searchFilterReducer, vrScansReducer,pageReducer } from "./reducers";
import { Store } from "./types";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger: Middleware<{}, Store, any> = (store) => (next) => (action) => {
  console.log(action);
  console.log("BEFORE:", store.getState());
  next(action)
  console.log("AFTER:", store.getState());
};

const store = createStore<Store, any, {}, {}>(
  combineReducers({
    searchFilter: searchFilterReducer,
    colors: colorsReducer,
    vrScans: vrScansReducer,
    page: pageReducer
  }),
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
