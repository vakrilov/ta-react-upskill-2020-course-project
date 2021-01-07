import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVRScans, Store } from "../store/store";
import "./VRScansList.css";

export const VRScansList: React.VFC = () => {
  const scans = useSelector((store: Store) => store.vrScans);
  const dispatch = useDispatch();
  const handleScroll = (e) => {
    const reachedBottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (reachedBottom) {
      console.log("Load more items...");
      dispatch(fetchVRScans())
    }
  };

  return (
    <div className="vr-scan-list" onScroll={handleScroll}>
      {scans.map((scan) => (
        <div key={scan.id} className="vr-scan">
          <img src={scan.thumb} alt="scan" />
          <span>{scan.name} </span>
        </div>
      ))}
    </div>
  );
};
