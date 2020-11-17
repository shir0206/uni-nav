import React, { useState, useEffect } from "react";
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
        props.setUserLocation(
          position.coords.latitude,
          position.coords.longitude
        );

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
      <ConsoleDemo
        userLocation={props.userLocation}
        timer={timer}
      ></ConsoleDemo>

      {timer && <UserLocation userLocation={props.userLocation}></UserLocation>}
    </>
  );
};
