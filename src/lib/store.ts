import create from "zustand";
import { getPositionFromIndex } from "./util/getPositionFromIndex";
import { getQuadrantFromIndex } from "./util/getQuadrantFromIndex";

export type Munition = "SCANNER" | "MISSILE";
export type Quadrant = 1 | 2 | 3 | 4;

export type AppStore = {
  columns: "four" | "eight";
  shots: { index: number; munition: Munition }[];
  selectedGridIndex: number | null;
  setSelectedGridIndex: (index: number) => void;
  getSelectedGridPosition: () => ReturnType<typeof getPositionFromIndex> | null;
  getSelectedGridQuadrant: () => ReturnType<typeof getQuadrantFromIndex> | null;
  missileCount: number;
  scannerCount: number;
  selectedMunition: Munition | null;
  setSelectedMunition: (munition: Munition) => void;
  clearSelectedMunition: () => void;
};

export const useStore = create<AppStore>((set, get) => ({
  columns: "eight",
  shots: [],
  selectedGridIndex: 60, // TODO default null
  setSelectedGridIndex: (index) =>
    set(() => {
      console.log("select index", index);
      get().clearSelectedMunition();
      return { selectedGridIndex: index };
    }),
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
  missileCount: 8,
  scannerCount: 3,
  selectedMunition: "SCANNER", // TODO default null
  setSelectedMunition: (munition) => set({ selectedMunition: munition }),
  clearSelectedMunition: () => set({ selectedMunition: null }),
}));
