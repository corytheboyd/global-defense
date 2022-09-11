import React from "react";
import { Cell } from "./Cell";
import { useStore } from "./store";

export const Grid: React.FC = () => {
  const { columns } = useStore();

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

  return <div className={`grid gap-1 ${columnsClass}`}>{cells}</div>;
};
