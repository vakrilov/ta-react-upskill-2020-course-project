import { addScans, initColors, setPage } from "./actions";
import { Store } from "./types";

// Example of color filter: http://localhost:3000/vrscans?colors_like=(^|,)(7|17)(,|$)
const URL = "http://localhost:3000";

export const fetchColors = () => async (dispatch) => {
  const data = await fetch(`${URL}/colors`);
  const colors = await data.json();
  dispatch(initColors(colors));
};

export const loadMoreScans = () => async (dispatch, getState) => {
  const state = getState() as Store;

  const pageToLoad = state.page + 1;

  let filter = "";
  if (state.searchFilter) {
    filter += `name_like=${state.searchFilter}&`;
  }
  if (state.selectedColors.length) {
    filter += state.selectedColors.map((c) => `colors=${c}&`);
  }

  const pagination = `_page=${pageToLoad}&_limit=18&`;

  const data = await fetch(`${URL}/vrscans?${filter}${pagination}`);
  const scans = await data.json();

  // Sleep
  await new Promise((resolve) => setTimeout(resolve, 200));

  dispatch(setPage(pageToLoad));
  dispatch(addScans(scans));
};
