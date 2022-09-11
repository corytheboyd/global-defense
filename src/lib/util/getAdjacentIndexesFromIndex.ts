import { Columns } from "../store";

export const getAdjacentIndexesFromIndex = (
  index: number,
  columns: Columns
): number[] => {
  const adjacentIndexes = [];

  if (columns === "eight") {
    const notLeftEdge = index % 8 !== 1;
    const notRightEdge = index % 8 !== 0;
    const notTopEdge = index > 8;
    const notBottomEdge = index <= 56;
    if (notLeftEdge) {
      adjacentIndexes.push(index - 1);
    }
    if (notRightEdge) {
      adjacentIndexes.push(index + 1);
    }
    if (notTopEdge) {
      if (notLeftEdge) {
        adjacentIndexes.push(index - 9);
      }
      adjacentIndexes.push(index - 8);
      if (notRightEdge) {
        adjacentIndexes.push(index - 7);
      }
    }
    if (notBottomEdge) {
      if (notLeftEdge) {
        adjacentIndexes.push(index + 7);
      }
      adjacentIndexes.push(index + 8);
      if (notRightEdge) {
        adjacentIndexes.push(index + 9);
      }
    }
  } else if (columns === "four") {
    const notLeftEdge = index % 4 !== 1;
    const notRightEdge = index % 4 !== 0;
    const notTopEdge = index > 4;
    const notBottomEdge = index <= 60;
    if (notLeftEdge) {
      adjacentIndexes.push(index - 1);
    }
    if (notRightEdge) {
      adjacentIndexes.push(index + 1);
    }
    if (notTopEdge) {
      if (notLeftEdge) {
        adjacentIndexes.push(index - 5);
      }
      adjacentIndexes.push(index - 4);
      if (notRightEdge) {
        adjacentIndexes.push(index - 3);
      }
    }
    if (notBottomEdge) {
      if (notLeftEdge) {
        adjacentIndexes.push(index + 3);
      }
      adjacentIndexes.push(index + 4);
      if (notRightEdge) {
        adjacentIndexes.push(index + 5);
      }
    }
  }

  return adjacentIndexes.sort();
};
