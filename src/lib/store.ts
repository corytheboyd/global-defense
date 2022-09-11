import create from "zustand";

type Store = {
  columns: "four" | "eight";
  selectedGridIndex: number | null;
  setSelectedGridIndex: (index: number) => void;
};

export const useStore = create<Store>((set) => ({
  columns: "four",
  selectedGridIndex: null,
  setSelectedGridIndex: (index) => set(() => ({ selectedGridIndex: index })),
}));
