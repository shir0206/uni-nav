import React, { useState, useCallback, useRef, useEffect } from "react";
import { UserLocation } from "./UserLocation";
import { ConsoleDemo } from "./ConsoleDemo";

export const UserLocationTimer = (props) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().getTime());
      console.log("UserLocationTimer", timer);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="consoleDemoContainer">
    <div className="consoleDemo">{" Timer: " + timer} </div>
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
      

      {timer && <UserLocation userLocation={props.userLocation}></UserLocation>}
    </>
  );
};
