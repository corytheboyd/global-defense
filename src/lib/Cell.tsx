import React, { useCallback } from "react";
import { useStore } from "./store";
import { getQuadrantFromIndex } from "./util/getQuadrantFromIndex";
import { getSymbolFromQuadrant } from "./util/getSymbolFromQuadrant";
import { getAdjacentIndexesFromIndex } from "./util/getAdjacentIndexesFromIndex";
import { getScannerConfidenceFromIndex } from "./util/getScannerConfidenceFromIndex";
import { getIsMissileHit } from "./util/getIsMissileHit";

export const Cell: React.FC<{
  index: number;
}> = ({ index }) => {
  const {
    columns,
    selectedGridIndex,
    setSelectedGridIndex,
    missileCount,
    selectedMunition,
  } = useStore();

  const missileShotForThisIndex = useStore((state) =>
    state.shots.find(
      (shot) => shot.munition === "MISSILE" && shot.index === index
    )
  );
  const scannerTouchIndexes = useStore((state) =>
    state.shots
      .filter((shot) => shot.munition === "SCANNER")
      .flatMap((shot) =>
        getAdjacentIndexesFromIndex(shot.index, columns).concat(shot.index)
      )
  );

  const quadrant = getQuadrantFromIndex(index, columns);
  const isSelected = selectedGridIndex === index;
  const isScanner = selectedMunition === "SCANNER";
  const isMissile = selectedMunition === "MISSILE";

  const isTouchedByScanner = scannerTouchIndexes.includes(index);
  const isShotAtByMissile = Boolean(missileShotForThisIndex);

  let isAdjacentSelected = false;
  if (selectedGridIndex && isScanner) {
    const adjacentIndexesToSelected = getAdjacentIndexesFromIndex(
      selectedGridIndex,
      columns
    );
    if (
      index !== selectedGridIndex &&
      adjacentIndexesToSelected.includes(index)
    ) {
      isAdjacentSelected = true;
    }
  }

  let label = getSymbolFromQuadrant(quadrant);
  if (isScanner && isSelected) {
    label = "S";
  }
  if (isMissile && isSelected) {
    label = "M";
  }

  let textColor = "";
  let backgroundColor = "";
  let borderColor = "";
  if (quadrant === 1) {
    if (isSelected) {
      backgroundColor = "cyan-168";
      textColor = "white-255-text";
      borderColor = "cyan-255-border";
    } else {
      textColor = "cyan-168-text";
      borderColor = "cyan-168-border";
    }
  } else if (quadrant === 2) {
    if (isSelected) {
      backgroundColor = "yellow-168";
      textColor = "black-255-text";
      borderColor = "yellow-255-border";
    } else {
      textColor = "yellow-168-text";
      borderColor = "yellow-168-border";
    }
  } else if (quadrant === 3) {
    if (isSelected) {
      backgroundColor = "orange-168";
      textColor = "black-255-text";
      borderColor = "orange-255-border";
    } else {
      textColor = "orange-168-text";
      borderColor = "orange-168-border";
    }
  } else if (quadrant === 4) {
    if (isSelected) {
      backgroundColor = "green-168";
      textColor = "white-255-text";
      borderColor = "green-255-border";
    } else {
      textColor = "green-168-text";
      borderColor = "green-168-border";
    }
  }

  let borderStyle = "tui-border-dotted";
  if (
    selectedGridIndex === index ||
    isAdjacentSelected ||
    isTouchedByScanner ||
    isShotAtByMissile
  ) {
    borderStyle = "tui-border-solid";
  }

  if (isScanner) {
    if (isSelected) {
      textColor = "black-255-text";
      borderColor = "green-168-border";
      backgroundColor = "green-255";
    } else if (isAdjacentSelected) {
      borderColor = "green-255-border";
    }
  }

  if (isMissile) {
    if (isSelected) {
      backgroundColor = "red-168";
      borderColor = "red-255-border";
      textColor = "white-255-text";
    }
  }

  if (isTouchedByScanner) {
    label = `${getScannerConfidenceFromIndex(index)}?`;
  }
  if (isShotAtByMissile) {
    const isHit = getIsMissileHit(index);
    if (isHit) {
      backgroundColor = "red-168";
      borderColor = "red-168-border";
      textColor = "white-168-text";
      label = "H";
    } else {
      backgroundColor = "white-168";
      borderColor = "white-168-border";
      textColor = "black-168-text";
      label = "X";
    }
  }

  const handleClick = useCallback(() => {
    if (missileCount == 0) {
      return;
    } else if (isShotAtByMissile) {
      return;
    }
    setSelectedGridIndex(index);
  }, [setSelectedGridIndex, missileCount, index]);

  return (
    <div
      key={index}
      className={`${textColor} ${borderColor} ${borderStyle} ${backgroundColor} h-8 flex items-center justify-center`}
      onClick={handleClick}
    >
      <span className="text-xs">{label}</span>
    </div>
  );
};
