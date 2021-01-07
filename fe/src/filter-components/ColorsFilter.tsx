import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleColorFilter } from "../store/actions";
import { Store, Color } from "../store/types";
import "./ColorsFilter.css";

export const ColorsFilter: React.VFC = () => {
  const colors = useSelector((store: Store) => store.colors);
  const selectedColors = useSelector((store: Store) => store.selectedColors);
  const dispatch = useDispatch();
  const toggleColor = (color: number) => dispatch(toggleColorFilter(color));

  return (
    <div className="color-filter">
      {colors.map((c: Color) => (
        <div
          key={c.id}
          style={{ backgroundColor: c.hex }}
          className="color"
          onClick={() => toggleColor(c.id)}
        >
          {selectedColors.includes(c.id) && "✔️"}
        </div>
      ))}
    </div>
  );
};
