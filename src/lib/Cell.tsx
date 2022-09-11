import React, { useCallback } from "react";
import { useStore } from "./store";
import { getQuadrantFromIndex } from "./util/getQuadrantFromIndex";
import { getSymbolFromQuadrant } from "./util/getSymbolFromQuadrant";

export const Cell: React.FC<{
  index: number;
}> = ({ index }) => {
  const { columns, selectedGridIndex, setSelectedGridIndex, missileCount } =
    useStore();
  const quadrant = getQuadrantFromIndex(index, columns);
  const isSelected = selectedGridIndex === index;

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
  if (selectedGridIndex === index) {
    borderStyle = "tui-border-solid";
  }

  const handleClick = useCallback(() => {
    if (missileCount == 0) {
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
      <span className="text-xs">
        {getSymbolFromQuadrant(quadrant)}
        {index}
      </span>
    </div>
  );
};
