import { addScans, initColors, setPage } from "./actions";
import { Store } from "./types";

// Example of color filter: http://localhost:3000/vrscans?colors_like=(^|,)(7|17)(,|$)
const URL = "http://localhost:3000";

export const fetchColors = () => async (dispatch) => {
  const data = await fetch(`${URL}/colors`);
  const colors = await data.json();
  // console.log("Colors fetched:", colors);
  dispatch(initColors(colors));
};

export const loadMoreScans = () => async (dispatch, getState) => {
  // console.log("Fetching VR Scans... ");
  const state = getState() as Store;

  const pageToLoad = state.page + 1;
  const filter = state.searchFilter ? `name_like=${state.searchFilter}&` : "";
  const pagination = `_page=${pageToLoad}&_limit=10&`;

  const data = await fetch(`${URL}/vrscans?${filter}${pagination}`);
  const scans = await data.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  // console.log("Fetched VR Scans:", scans);
  dispatch(setPage(pageToLoad));

  dispatch(addScans(scans));
};
