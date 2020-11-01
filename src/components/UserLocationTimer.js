import React, { useState, useCallback, useRef, useEffect } from "react";
import { UserLocation } from "./UserLocation";

export const UserLocationTimer = (props) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().getTime());
      console.log("UserLocationTimer", new Date().getTime());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {timer && <UserLocation userLocation={props.userLocation}></UserLocation>}
    </>
  );
};
