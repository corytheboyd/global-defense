import React, { useCallback } from "react";
import { useStore } from "./store";

export const MunitionSelect: React.FC = () => {
  const { setSelectedMunition, scannerCount } = useStore();

  const handleClickMissile = useCallback(() => {
    setSelectedMunition("MISSILE");
  }, [setSelectedMunition]);
  const handleClickScanner = useCallback(() => {
    setSelectedMunition("SCANNER");
  }, [setSelectedMunition]);

  const isScannerCountZero = scannerCount === 0;

  return (
    <fieldset className="tui-fieldset tui-border-solid">
      <legend className="text-xs">Munition Type</legend>
      <div className="flex w-full space-x-4 mb-2">
        <button
          className={`tui-button green-168 text-xs basis-1/2 ${
            isScannerCountZero && "disabled"
          }`}
          disabled={isScannerCountZero}
          onClick={handleClickScanner}
        >
          SCANNER
        </button>
        <button
          className="tui-button red-168 text-xs basis-1/2"
          onClick={handleClickMissile}
        >
          MISSILE
        </button>
      </div>
    </fieldset>
  );
};
