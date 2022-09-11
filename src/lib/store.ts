import create from "zustand";
import { getPositionFromIndex } from "./util/getPositionFromIndex";
import { getQuadrantFromIndex } from "./util/getQuadrantFromIndex";

type Munition = "SCANNER" | "MISSILE";

export type AppStore = {
  columns: "four" | "eight";
  shots: { index: number; munition: Munition }[];
  selectedGridIndex: number | null;
  setSelectedGridIndex: (index: number) => void;
  getSelectedGridPosition: () => ReturnType<typeof getPositionFromIndex> | null;
  getSelectedGridQuadrant: () => ReturnType<typeof getQuadrantFromIndex> | null;
  selectedMunition: Munition | null;
  setSelectedMunition: (munition: Munition) => void;
  clearSelectedMunition: () => void;
};

export const useStore = create<AppStore>((set, get) => ({
  columns: "eight",
  shots: [],
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
  selectedMunition: null,
  setSelectedMunition: (munition) => set({ selectedMunition: munition }),
  clearSelectedMunition: () => set({ selectedMunition: null }),
}));
