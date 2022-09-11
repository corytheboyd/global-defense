type Confidence = 1 | 2 | 3 | 4 | 5;

export const getScannerConfidenceFromIndex = (index: number): Confidence => {
  // TODO lol
  return ((index % 4) + 1) as Confidence;
};
