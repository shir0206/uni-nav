import React, { useState, useEffect, useRef } from "react";
import "./locate.css";

export const Locate = ({ panTo }) => {
  const positionOptions = {
    timeout: Infinity,
    maximumAge: 0,
    enableHighAccuracy: true,
  };

  // navigator.geolocation.getCurrentPosition(success,error,options);

  return (
    <>
      {navigator.geolocation.getCurrentPosition(
        (position) => {
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // setPosition(position);
          console.log("your loction: ", position);
        },
        () => {
          console.log("your loction not found");
        },
        positionOptions
      )}
    </>
  );
};
