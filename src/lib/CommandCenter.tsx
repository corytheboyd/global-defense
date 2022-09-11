import React from "react";
import { useStore } from "./store";
import { getSymbolFromQuadrant } from "./util/getSymbolFromQuadrant";

const MunitionSelect: React.FC = () => {
  return (
    <fieldset className="tui-fieldset tui-border-solid">
      <legend>Select Munition Type</legend>
      <div className="flex flex-col space-y-5">
        <button className="tui-button red-168">IDW (8)</button>
        <button className="tui-button green-168">SPB (3)</button>
      </div>
    </fieldset>
  );
};

export const CommandCenter: React.FC = () => {
  const { getSelectedGridPosition, getSelectedGridQuadrant } = useStore();
  const position = getSelectedGridPosition();
  const quadrant = getSelectedGridQuadrant();

  let information = "Select a location on the grid.";
  if (position && quadrant) {
    const quadrantSymbol = getSymbolFromQuadrant(quadrant);
    const positionString = `(${position.x}, ${position.y})`;
    information = `Quadrant: ${quadrantSymbol},  Position: ${positionString}`;
  }

  return (
    <div className="tui-panel w-full">
      <div className="tui-panel-header white-255">
        <h2 className="black-255-text">Command Center</h2>
      </div>
      <div className="tui-panel-content white-168 text-sm">
        <fieldset className="tui-fieldset tui-border-dotted">
          <legend>Information</legend>
          <p className="text-xs black-255-text">{information}</p>
        </fieldset>
      </div>
    </div>
  );
};
