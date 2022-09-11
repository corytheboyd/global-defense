import create from "zustand";
import { getPositionFromIndex } from "./util/getPositionFromIndex";
import { getQuadrantFromIndex } from "./util/getQuadrantFromIndex";

export type AppStore = {
  columns: "four" | "eight";
  selectedGridIndex: number | null;
  setSelectedGridIndex: (index: number) => void;
  getSelectedGridPosition: () => ReturnType<typeof getPositionFromIndex> | null;
  getSelectedGridQuadrant: () => ReturnType<typeof getQuadrantFromIndex> | null;
};

export const useStore = create<AppStore>((set, get) => ({
  columns: "four",
  selectedGridIndex: null,
  setSelectedGridIndex: (index) => set(() => ({ selectedGridIndex: index })),
  getSelectedGridPosition: () => {
    const { selectedGridIndex, columns } = get();
    if (!selectedGridIndex) {
      return null;
    }
    return getPositionFromIndex(selectedGridIndex, columns);
  },
  getSelectedGridQuadrant: () => {
    const { selectedGridIndex, columns } = get();
    if (!selectedGridIndex) {
      return null;
    }
    return getQuadrantFromIndex(selectedGridIndex, columns);
  },
}));
