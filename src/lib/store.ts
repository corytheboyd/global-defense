import create from "zustand";
import { getPositionFromIndex } from "./util/getPositionFromIndex";
import { getQuadrantFromIndex } from "./util/getQuadrantFromIndex";

export type Munition = "SCANNER" | "MISSILE";
export type Quadrant = 1 | 2 | 3 | 4;
export type Columns = "four" | "eight";
export type Shot = { index: number; munition: Munition };

export type AppStore = {
  columns: Columns;
  shots: Shot[];
  selectedGridIndex: number | null;
  setSelectedGridIndex: (index: number) => void;
  clearSelectedGridIndex: () => void;
  getSelectedGridPosition: () => ReturnType<typeof getPositionFromIndex> | null;
  getSelectedGridQuadrant: () => ReturnType<typeof getQuadrantFromIndex> | null;
  missileCount: number;
  scannerCount: number;
  selectedMunition: Munition | null;
  setSelectedMunition: (munition: Munition) => void;
  clearSelectedMunition: () => void;
  fireShot: (shot: Shot) => void;
};

export const useStore = create<AppStore>((set, get) => ({
  columns: "eight",
  shots: [],
  selectedGridIndex: null,
  setSelectedGridIndex: (index) =>
    set(() => {
      get().clearSelectedMunition();
      return { selectedGridIndex: index };
    }),
  clearSelectedGridIndex: () => set({ selectedGridIndex: null }),
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
  selectedMunition: null,
  setSelectedMunition: (munition) => set({ selectedMunition: munition }),
  clearSelectedMunition: () => set({ selectedMunition: null }),
  fireShot: (shot) => {
    console.log("fireShot", shot);

    const { shots, missileCount, scannerCount } = get();
    const partial: Partial<AppStore> = { shots: shots.concat(shot) };

    if (shot.munition === "MISSILE") {
      partial.missileCount = missileCount - 1;
    } else if (shot.munition === "SCANNER") {
      partial.scannerCount = scannerCount - 1;
    }

    get().clearSelectedMunition();
    get().clearSelectedGridIndex();

    return set(partial);
  },
}));
