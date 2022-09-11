import React, { useCallback } from "react";
import { useStore } from "./store";
import { getSymbolFromQuadrant } from "./util/getSymbolFromQuadrant";

const MunitionSelect: React.FC = () => {
  const { setSelectedMunition } = useStore();

  const handleClickMissile = useCallback(() => {
    setSelectedMunition("MISSILE");
  }, [setSelectedMunition]);
  const handleClickScanner = useCallback(() => {
    setSelectedMunition("SCANNER");
  }, [setSelectedMunition]);

  return (
    <fieldset className="tui-fieldset tui-border-solid">
      <legend>Munition Type</legend>
      <div className="flex flex-col space-y-5">
        <button className="tui-button red-168" onClick={handleClickMissile}>
          MISSILE (8)
        </button>
        <button className="tui-button green-168" onClick={handleClickScanner}>
          SCANNER (3)
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
  let actionButtonColor;
  if (selectedMunition === "MISSILE") {
    title = "Fire Missile";
    actionButtonLabel = "FIRE";
    actionButtonColor = "red-255";
  } else if (selectedMunition === "SCANNER") {
    title = "Deploy Scanner";
    actionButtonLabel = "DEPLOY";
    actionButtonColor = "green-255";
  }

  return (
    <fieldset className="tui-fieldset tui-border-solid">
      <legend>{title}</legend>
      <div className="flex flex-col space-y-5">
        <button
          className={`tui-button ${actionButtonColor}`}
          onClick={handleClickFire}
        >
          {actionButtonLabel}
        </button>
        <button className="tui-button white-255" onClick={handleClickCancel}>
          CANCEL
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

  const showMunitionSelect = Boolean(position && quadrant && !selectedMunition);
  const showMunitionConfirm = Boolean(selectedMunition);
  const isMissileSelected = selectedMunition === "MISSILE";
  const isScannerSelected = selectedMunition === "SCANNER";

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
      <div className={`tui-panel-content text-sm ${backgroundColor}`}>
        <fieldset className="tui-fieldset tui-border-dotted">
          <legend>Information</legend>
          <p className="text-xs black-255-text">{information}</p>
        </fieldset>

        {showMunitionSelect && <MunitionSelect />}
        {showMunitionConfirm && <MunitionConfirm />}
      </div>
    </div>
  );
};
