import React, { useState, useEffect, useCallback, useRef } from "react";
import "./settings.css";
import { SettingsDisplayPOI } from "./SettingsDisplayPOI";

export const Settings = (props) => {
  const [settings, setSettings] = useState(false);

  return (
    <>
      <button
        className="settings-button"
        onClick={() => {
          setSettings(!settings);
        }}
      >
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/945/945147.svg"
          alt="settings"
        ></img>
      </button>

      {settings && (
        <div className="settings">
          <SettingsDisplayPOI
            displayPoiType={props.displayPoiType}
            setDisplayPoiType={props.setDisplayPoiType}
          ></SettingsDisplayPOI>

          <button
            className="save"
            onClick={() => {
              setSettings(!settings);
            }}
          >
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/190/190411.svg"
              alt="OK"
            ></img>
          </button>
        </div>
      )}
    </>
  );
};
