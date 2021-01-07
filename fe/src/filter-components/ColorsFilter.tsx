import React from "react";
import { useSelector } from "react-redux";
import { Store, Color } from "../store/store";
import "./ColorsFilter.css";

export const ColorsFilter: React.VFC = () => {
  const colors = useSelector((store: Store) => store.colors);

  return (
    <div className="color-filter">
      {colors.map((c: Color) => (
        <div key={c.id} style={{ backgroundColor: c.hex }} className="color">✔️</div>
      ))}
    </div>
  );
};
