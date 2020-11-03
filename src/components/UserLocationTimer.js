import React, { useState, useCallback, useRef, useEffect } from "react";
import { UserLocation } from "./UserLocation";
import { ConsoleDemo } from "./ConsoleDemo";

export const UserLocationTimer = (props) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
      console.log("UserLocationTimer", timer);
      locateMe();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function locateMe() {
    const positionOptions = {
      timeout: Infinity,
      maximumAge: 0,
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        props.panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        console.log("your loction: ", position);
      },
      () => {
        console.log("your loction not found");
      },
      positionOptions
    );

  }
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
