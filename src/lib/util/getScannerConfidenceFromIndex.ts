import { useStore } from "../store";

type Confidence = 1 | 2 | 3 | 4 | 5;

export const getScannerConfidenceFromIndex = (index: number): Confidence => {
  const shots = useStore().shots;
  console.log("shots", shots);
  return 1;
};
