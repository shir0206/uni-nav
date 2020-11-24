import React, { useState, useEffect, useCallback, useRef } from "react";
import "./consoleDemo.css";

export const ConsoleDemo = (props) => {
  return (
    <div className="consoleDemoContainer">
      <div className="consoleDemo">{" Timer: " + props.timer} </div>
      <div className="consoleDemo">
        {props.userLocationCoords &&
          " Location: " +
            " LAT: " +
            props.userLocationCoords.lat +
            " LNG: " +
            props.userLocationCoords.lng}
      </div>
      <div className="consoleDemo">
        {!props.userLocationCoords && " Location: " + " LAT: null " + " LNG: null "}
      </div>
    </div>
  );
};
