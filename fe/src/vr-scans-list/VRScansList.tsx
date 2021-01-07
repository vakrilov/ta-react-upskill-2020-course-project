import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../store/store";
import "./VRScansList.css";

export const VRScansList: React.VFC = () => {
  const scans = useSelector((store: Store) => store.vrScans);

  return (
    <div className="vr-scan-list">
      {scans.map((scan) => (
        <div key={scan.id} className="vr-scan">
          <img src={scan.thumb} alt="scan" />
          <span>{scan.name} </span>
        </div>
      ))}
    </div>
  );
};
