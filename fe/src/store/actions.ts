import { ADD_VR_SCANS, INIT_COLORS, RESET_VR_SCANS, SET_PAGE, SET_SEARCH_FILTER } from "./constants";
import { Color, VRScan } from "./types";

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

export const resetScans = () => ({
  type: RESET_VR_SCANS,
});


export const setPage = (value: number) => ({
  type: SET_PAGE,
  value,
});
