import { addScans, initColors } from "./actions";

// Example of color filter: http://localhost:3000/vrscans?colors_like=(^|,)(7|17)(,|$)
const URL = "http://localhost:3000";

export const fetchColors = () => async (dispatch) => {
  const data = await fetch(`${URL}/colors`);
  const colors = await data.json();
  // console.log("Colors fetched:", colors);
  dispatch(initColors(colors));
};

export const fetchVRScans = () => async (dispatch) => {
  // console.log("Fetching VR Scans... ");

  const data = await fetch(`${URL}/vrscans?_page=1&_limit=30`);
  const scans = await data.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  // console.log("Fetched VR Scans:", scans);
  dispatch(addScans(scans));
};
