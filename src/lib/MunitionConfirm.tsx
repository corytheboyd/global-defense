import React, { useCallback } from "react";
import { useStore } from "./store";

export const MunitionConfirm: React.FC = () => {
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
      <legend className="text-xs">{title}</legend>
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
