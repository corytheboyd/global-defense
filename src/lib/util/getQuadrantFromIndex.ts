import { AppStore, Quadrant } from "../store";

export const getQuadrantFromIndex = (
  index: number,
  columns: Pick<AppStore, "columns">["columns"]
): Quadrant => {
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
  throw new Error("Failed to get quadrant");
};
