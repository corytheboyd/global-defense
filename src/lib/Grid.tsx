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
  let backgroundColor;
  if (quadrant === 1) {
    backgroundColor = "bg-blue-800";
  } else if (quadrant === 2) {
    backgroundColor = "bg-emerald-800";
  } else if (quadrant === 3) {
    backgroundColor = "bg-amber-800";
  } else if (quadrant === 4) {
    backgroundColor = "bg-red-800";
  }
  return (
    <div key={index} className={`${backgroundColor} h-8`}>
      {quadrant}
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

  return (
    <section className={`bg-red-500 grid gap-1 ${columnsClass}`}>
      {cells}
    </section>
  );
};
