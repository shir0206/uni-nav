import React, { useState, useEffect, useRef } from "react";
import "./locate.css";

export const Locate = (props) => {
  

  // navigator.geolocation.getCurrentPosition(success,error,options);

  //return ( <>
    //   {navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       panTo({
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //       });

    //       console.log("your loction: ", position);
    //     },
    //     () => {
    //       console.log("your loction not found");
    //     },
    //     positionOptions
    //   )}
    // </>);
    
  return (
    

    <button
      className="locate"
      onClick={() => {
        props.setLocate(!props.locate);
      }}
    >
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/744/744848.svg"
        alt="compass-locate me"
      ></img>
    </button>
  );
};
