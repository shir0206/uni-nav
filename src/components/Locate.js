import React from "react";
import "./locate.css";

export const Locate = ({ panTo, options }) => {

  return (
    <button
      className="locate"
      onClick={() => {
        // navigator.geolocation.getCurrentPosition(success,error,options);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });

            console.log("your loction: ", position);
          },
          () => {
            console.log("your loction not found");
          },
          options
        );
      }}
    >
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/744/744848.svg"
        alt="compass-locate me"
      ></img>
    </button>
  );
};