import React from "react";

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

const buildCell = (index: number, columns: "four" | "eight") => {
  const quadrant = getQuadrantFromIndex(index, columns);

  let color;
  let symbol;
  if (quadrant === 1) {
    color = "red-168-border red-168-text";
    symbol = "Λ";
  } else if (quadrant === 2) {
    color = "yellow-168-border yellow-168-text";
    symbol = "Σ";
  } else if (quadrant === 3) {
    color = "green-168-border green-168-text";
    symbol = "Φ";
  } else if (quadrant === 4) {
    color = "orange-168-border orange-168-text";
    symbol = "Ω";
  }

  return (
    <div
      key={index}
      className={`${color} h-8 tui-border-dotted flex items-center justify-center`}
    >
      <span className="text-xs">{symbol}</span>
    </div>
  );
};

export const Grid: React.FC<{ columns: "four" | "eight" }> = ({ columns }) => {
  const cells = [];
  for (let i = 0; i < 64; i++) {
    cells.push(buildCell(i + 1, columns));
  }

  let columnsClass;
  if (columns === "eight") {
    columnsClass = "grid-cols-8";
  }
  if (columns === "four") {
    columnsClass = "grid-cols-4";
  }

  return <article className={`grid gap-1 ${columnsClass}`}>{cells}</article>;
};
