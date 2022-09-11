import React, { useCallback } from "react";
import { useStore } from "./store";

const getQuadrantFromIndex = (index: number, columns: "four" | "eight") => {
  if (columns === "four") {
    if (index >= 1 && index <= 16) {
      return 1;
    } else if (index >= 17 && index <= 32) {
      return 2;
    } else if (index >= 33 && index <= 48) {
      return 3;
    } else if (index >= 49 && index <= 64) {
      return 4;
    }
  }
  if (columns === "eight") {
    if (
      (index >= 1 && index <= 4) ||
      (index >= 9 && index <= 12) ||
      (index >= 17 && index <= 20) ||
      (index >= 25 && index <= 28)
    ) {
      return 1;
    } else if (
      (index >= 5 && index <= 8) ||
      (index >= 13 && index <= 16) ||
      (index >= 21 && index <= 24) ||
      (index >= 29 && index <= 32)
    ) {
      return 2;
    } else if (
      (index >= 33 && index <= 36) ||
      (index >= 41 && index <= 44) ||
      (index >= 49 && index <= 52) ||
      (index >= 57 && index <= 60)
    ) {
      return 3;
    } else if (
      (index >= 37 && index <= 40) ||
      (index >= 45 && index <= 48) ||
      (index >= 53 && index <= 56) ||
      (index >= 61 && index <= 64)
    ) {
      return 4;
    }
  }
  return -1;
};

const Cell: React.FC<{ index: number; columns: "four" | "eight" }> = ({
  index,
  columns,
}) => {
  const { selectedGridIndex, setSelectedGridIndex } = useStore();
  const quadrant = getQuadrantFromIndex(index, columns);

  const isSelected = selectedGridIndex === index;

  let textColor = "";
  let quadrantSymbol;
  let backgroundColor = "";
  let borderColor = "";
  if (quadrant === 1) {
    quadrantSymbol = "Λ";
    if (isSelected) {
      backgroundColor = "red-168";
      textColor = "white-255-text";
      borderColor = "red-255-border";
    } else {
      textColor = "red-168-text";
      borderColor = "red-168-border";
    }
  } else if (quadrant === 2) {
    quadrantSymbol = "Σ";
    if (isSelected) {
      backgroundColor = "yellow-168";
      textColor = "black-255-text";
      borderColor = "yellow-255-border";
    } else {
      textColor = "yellow-168-text";
      borderColor = "yellow-168-border";
    }
  } else if (quadrant === 3) {
    quadrantSymbol = "Φ";
    if (isSelected) {
      backgroundColor = "green-168";
      textColor = "black-255-text";
      borderColor = "green-255-border";
    } else {
      textColor = "green-168-text";
      borderColor = "green-168-border";
    }
  } else if (quadrant === 4) {
    quadrantSymbol = "Ω";
    if (isSelected) {
      backgroundColor = "orange-168";
      textColor = "white-255-text";
      borderColor = "orange-255-border";
    } else {
      textColor = "orange-168-text";
      borderColor = "orange-168-border";
    }
  }

  let borderStyle = "tui-border-dotted";
  if (selectedGridIndex === index) {
    borderStyle = "tui-border-solid";
  }

  const handleClick = useCallback(() => {
    setSelectedGridIndex(index);
  }, [index]);

  return (
    <div
      key={index}
      className={`${textColor} ${borderColor} ${borderStyle} ${backgroundColor} h-8 flex items-center justify-center`}
      onClick={handleClick}
    >
      <span className="text-xs">{quadrantSymbol}</span>
    </div>
  );
};

export const Grid: React.FC<{ columns: "four" | "eight" }> = ({ columns }) => {
  const cells = [];
  for (let i = 0; i < 64; i++) {
    const cellIndex = i + 1;
    cells.push(<Cell key={cellIndex} index={cellIndex} columns={columns} />);
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
