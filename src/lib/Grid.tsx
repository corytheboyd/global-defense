import React from "react";
import { Cell } from "./Cell";
import { useStore } from "./store";
import { getAdjacentIndexesFromIndex } from "./util/getAdjacentIndexesFromIndex";

export const Grid: React.FC = () => {
  const { columns, selectedGridIndex } = useStore();

  const cells = [];
  for (let i = 0; i < 64; i++) {
    const index = i + 1;
    cells.push(<Cell key={index} index={index} />);
  }

  let columnsClass;
  if (columns === "eight") {
    columnsClass = "grid-cols-8";
  }
  if (columns === "four") {
    columnsClass = "grid-cols-4";
  }

  if (selectedGridIndex) {
    console.log(getAdjacentIndexesFromIndex(selectedGridIndex));
  }

  return <div className={`grid gap-1 ${columnsClass}`}>{cells}</div>;
};
