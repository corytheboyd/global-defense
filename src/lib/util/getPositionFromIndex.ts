import { AppStore } from "../store";

type Position = {
  x: number;
  y: number;
};

// I don't care if you're better at math than I am, it fucking works
export const getPositionFromIndex = (
  index: number,
  columns: Pick<AppStore, "columns">["columns"]
): Position => {
  const x = index % 4 === 0 ? 4 : index % 4;
  let y;
  if (columns === "four") {
    y = Math.ceil(Math.ceil(index / 4) % 4.01);
  }
  if (columns === "eight") {
    y = Math.ceil(Math.ceil(index / 8) % 4.01);
  }
  return { x, y: y as number };
};
