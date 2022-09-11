import React from "react";
import { Quadrant, useStore } from "./store";
import { getSymbolFromQuadrant } from "./util/getSymbolFromQuadrant";
import { MunitionSelect } from "./MunitionSelect";
import { MunitionConfirm } from "./MunitionConfirm";

export const CommandCenter: React.FC = () => {
  const {
    getSelectedGridPosition,
    getSelectedGridQuadrant,
    selectedMunition,
    scannerCount,
    missileCount,
  } = useStore();
  const position = getSelectedGridPosition();
  const quadrant = getSelectedGridQuadrant();

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
          <legend className="text-xs">Information</legend>
          <p className="text-xs black-255-text">
            <div className="space-y-2">
              <div>
                <p>
                  <span>▶ Missiles: </span>
                  <span className="font-bold">{missileCount}</span>
                </p>
                <p>
                  <span>▶ Scanners: </span>
                  <span className="font-bold">{scannerCount}</span>
                </p>
                <p>
                  <span>▶ Targeting: </span>
                  <span className="font-bold">
                    {!isPositionSelected && <span>NULL</span>}
                    {isPositionSelected && (
                      <span>
                        {getSymbolFromQuadrant(quadrant as Quadrant)} (
                        {position?.x}, {position?.y})
                      </span>
                    )}
                  </span>
                </p>
              </div>
              <div>
                {!isPositionSelected && (
                  <>
                    <p>Welcome back, commander.</p>
                    <p>Select a grid cell to proceed.</p>
                  </>
                )}
                {isPositionSelected && !isMunitionSelected && (
                  <p>
                    Select a munition type to arm for deployment, commander.
                  </p>
                )}

                {isMissileSelected && (
                  <p>Deep impact nuclear warhead armed for launch.</p>
                )}
                {isScannerSelected && (
                  <p>
                    Short-range radial scanning beacon ready for deployment.
                  </p>
                )}
              </div>
            </div>
          </p>
        </fieldset>

        {showMunitionSelect && <MunitionSelect />}
        {showMunitionConfirm && <MunitionConfirm />}
      </div>
    </div>
  );
};
