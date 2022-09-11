import React, { useCallback } from "react";
import { Quadrant, useStore } from "./store";
import { getSymbolFromQuadrant } from "./util/getSymbolFromQuadrant";

const MunitionSelect: React.FC = () => {
  const { setSelectedMunition, missileCount, scannerCount } = useStore();

  const handleClickMissile = useCallback(() => {
    setSelectedMunition("MISSILE");
  }, [setSelectedMunition]);
  const handleClickScanner = useCallback(() => {
    setSelectedMunition("SCANNER");
  }, [setSelectedMunition]);

  return (
    <fieldset className="tui-fieldset tui-border-solid">
      <legend>Munition Type</legend>
      <div className="flex items-center justify-center w-full space-x-5 mb-2">
        <button
          className="tui-button green-168 text-xs flex-grow"
          onClick={handleClickScanner}
        >
          SCANNER ({scannerCount})
        </button>
        <button
          className="tui-button red-168 text-xs flex-grow"
          onClick={handleClickMissile}
        >
          MISSILE ({missileCount})
        </button>
      </div>
    </fieldset>
  );
};

const MunitionConfirm: React.FC = () => {
  const { selectedMunition, clearSelectedMunition } = useStore();

  const handleClickFire = useCallback(() => {
    console.log("TODO fire!");
  }, []);
  const handleClickCancel = useCallback(() => {
    clearSelectedMunition();
  }, [clearSelectedMunition]);

  let title;
  let actionButtonLabel;
  let actionButtonTextColor;
  let actionButtonColor;
  if (selectedMunition === "MISSILE") {
    title = "Fire Missile";
    actionButtonLabel = "FIRE";
    actionButtonColor = "red-255";
    actionButtonTextColor = "white-255-text";
  } else if (selectedMunition === "SCANNER") {
    title = "Deploy Scanner";
    actionButtonLabel = "DEPLOY";
    actionButtonColor = "green-255";
    actionButtonTextColor = "black-255-text";
  }

  return (
    <fieldset className="tui-fieldset tui-border-solid">
      <legend>{title}</legend>
      <div className="flex items-center justify-center mb-2 space-x-4">
        <button
          className="tui-button white-168 basis-1/3 text-xs"
          onClick={handleClickCancel}
        >
          ABORT
        </button>
        <button
          className={`tui-button text-xs basis-2/3 ${actionButtonColor} ${actionButtonTextColor}`}
          onClick={handleClickFire}
        >
          {actionButtonLabel}
        </button>
      </div>
    </fieldset>
  );
};

export const CommandCenter: React.FC = () => {
  const { getSelectedGridPosition, getSelectedGridQuadrant, selectedMunition } =
    useStore();
  const position = getSelectedGridPosition();
  const quadrant = getSelectedGridQuadrant();

  let information = "Select a location on the grid.";
  if (position && quadrant) {
    const quadrantSymbol = getSymbolFromQuadrant(quadrant);
    const positionString = `(${position.x}, ${position.y})`;
    information = `Targeting: ${quadrantSymbol} ${positionString}. Select munition and fire when ready.`;
  }

  const isPositionSelected = Boolean(position && quadrant);
  const isMunitionSelected = Boolean(selectedMunition);
  const isMissileSelected = selectedMunition === "MISSILE";
  const isScannerSelected = selectedMunition === "SCANNER";

  const showMunitionSelect = isPositionSelected && !isMunitionSelected;
  const showMunitionConfirm = isMunitionSelected;

  let backgroundColor = "white-168";
  if (isMissileSelected) {
    backgroundColor = "red-168";
  } else if (isScannerSelected) {
    backgroundColor = "green-168";
  }

  return (
    <div className="tui-panel w-full">
      <div className="tui-panel-header white-255">
        <h2 className="black-255-text">Command Center</h2>
      </div>
      <div className={`tui-panel-content ${backgroundColor}`}>
        <fieldset className="tui-fieldset tui-border-dotted">
          <legend>Information</legend>
          <p className="text-xs black-255-text">
            {!isPositionSelected && <span>Select a grid cell to proceed.</span>}
            {isPositionSelected && (
              <span className="font-bold">
                Position: {getSymbolFromQuadrant(quadrant as Quadrant)} (
                {position?.x}, {position?.y})
              </span>
            )}
          </p>
        </fieldset>

        {showMunitionSelect && <MunitionSelect />}
        {showMunitionConfirm && <MunitionConfirm />}
      </div>
    </div>
  );
};
