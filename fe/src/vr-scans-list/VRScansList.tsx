import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVRScans } from "../store/async-actions";
import { Store } from "../store/types";
import "./VRScansList.css";

export const VRScansList: React.VFC = () => {
  const scans = useSelector((store: Store) => store.vrScans);
  const dispatch = useDispatch();
  const handleScroll = useCallback(
    (e) => {
      const el = e.target;
      const reachedBottom = el.scrollTop + el.clientHeight === el.scrollHeight;
      if (reachedBottom && scans.length) {
        console.log("Load more items...");
        dispatch(fetchVRScans());
      }
    },
    [scans, dispatch]
  );

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
