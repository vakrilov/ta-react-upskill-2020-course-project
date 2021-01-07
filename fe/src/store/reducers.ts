import { Reducer } from "redux";
import { ADD_VR_SCANS, INIT_COLORS, SET_SEARCH_FILTER } from "./constants";
import { Color, VRScan } from "./types";

export const searchFilterReducer: Reducer<string> = (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return action.value;
    default:
      return state;
  }
};

export const colorsReducer: Reducer<Color[]> = (state = [], action) => {
  switch (action.type) {
    case INIT_COLORS:
      return action.value;
    default:
      return state;
  }
};

export const vrScansReducer: Reducer<VRScan[]> = (state = [], action) => {
  switch (action.type) {
    case ADD_VR_SCANS:
      return [...state, ...action.value];
    default:
      return state;
  }
};
