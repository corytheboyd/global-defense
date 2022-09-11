import { Quadrant } from "../store";

export const getSymbolFromQuadrant = (quadrant: Quadrant): string => {
  if (quadrant === 1) {
    return "Λ";
  } else if (quadrant === 2) {
    return "Σ";
  } else if (quadrant === 3) {
    return "Φ";
  } else if (quadrant === 4) {
    return "Ω";
  }
  throw new Error("Failed to get quadrant symbol");
};
