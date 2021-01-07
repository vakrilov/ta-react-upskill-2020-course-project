import { Reducer } from "redux";
import {
  ADD_VR_SCANS,
  INIT_COLORS,
  RESET_VR_SCANS,
  SET_PAGE,
  SET_SEARCH_FILTER,
  TOGGLE_COLOR_FILTER,
} from "./constants";
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
    case RESET_VR_SCANS:
      return [];
    default:
      return state;
  }
};

export const pageReducer: Reducer<number> = (state = 0, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.value;
    default:
      return state;
  }
};

export const selectedColorsReducer: Reducer<number[]> = (
  state = [],
  action
) => {
  switch (action.type) {
    case TOGGLE_COLOR_FILTER: {
      const color: number = action.value;
      if (state.includes(color)) {
        return state.filter((c) => c !== color);
      } else {
        return [...state, color];
      }
    }
    default:
      return state;
  }
};
