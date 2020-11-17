import React, { useState, useEffect, useCallback, useRef } from "react";
import "./consoleDemo.css";

export const ConsoleDemo = (props) => {
  return (
    <div className="consoleDemoContainer">
      <div className="consoleDemo">{" Timer: " + props.timer} </div>
      <div className="consoleDemo">
        {props.userLocation &&
          " Location: " +
            " LAT: " +
            props.userLocation.lat +
            " LNG: " +
            props.userLocation.lng}
      </div>
      <div className="consoleDemo">
        {!props.userLocation && " Location: " + " LAT: null " + " LNG: null "}
      </div>
    </div>
  );
};
