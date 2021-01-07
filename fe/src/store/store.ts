import {
  createStore,
  combineReducers,
  Reducer,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

// Constants
const URL = "http://localhost:3000";
const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";
const INIT_COLORS = "INIT_COLORS";
const ADD_VR_SCANS = "ADD_VR_SCANS";

// Example of filter: http://localhost:3000/vrscans?colors_like=(^|,)(7|17)(,|$)

// TYPES
export type Color = {
  id: number;
  hex: string;
};

export type VRScan = {
  id: number;
  name: string;
  thumb: string;
  colors: number[];
};

export type Store = {
  colors: Color[];
  vrScans: VRScan[];

  searchFilter: string;
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

export const addScans = (value: VRScan[]) => ({
  type: ADD_VR_SCANS,
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

const vrScansReducer: Reducer<VRScan[]> = (state = [], action) => {
  switch (action.type) {
    case ADD_VR_SCANS:
      return [...state, ...action.value];
    default:
      return state;
  }
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<Store, any, {}, {}>(
  combineReducers({
    searchFilter: searchFilterReducer,
    colors: colorsReducer,
    vrScans: vrScansReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// INIT
const storeDispatch = store.dispatch;

export const fetchColors = () => async (dispatch) => {
const data = await fetch(`${URL}/colors`);
  const colors = await data.json();
  console.log("Colors fetched:", colors);
  dispatch(initColors(colors));
};

export const fetchVRScans = () => async (dispatch) => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const data = await fetch(`${URL}/vrscans?_page=1&_limit=30`);
  const scans = await data.json();
  console.log("VR Scans fetched:", scans);
  dispatch(addScans(scans));
};

storeDispatch(fetchColors());
storeDispatch(fetchVRScans());

export default store;
