import React from "react";
import "./routes.css";

import { Polyline } from "@react-google-maps/api";

export const Routes = (props) => {
  const roadA = [
    { lat: 32.7640483, lng: 35.0166316 },
    { lat: 32.763692, lng: 35.017082 },
    { lat: 32.763361, lng: 35.016665 },
    { lat: 32.7620995, lng: 35.0182302 },
    { lat: 32.7623612, lng: 35.0200327 },
    { lat: 32.763234, lng: 35.019025 },
    { lat: 32.7628534, lng: 35.0185092 },
  ];

  const roadB = [
    { lat: 32.762666, lng: 35.016366 },
    { lat: 32.762135, lng: 35.016931 },
    { lat: 32.761276, lng: 35.018554 },
    { lat: 32.760545, lng: 35.019495 },
  ];

  const roadC = [
    { lat: 32.761987, lng: 35.018321 },
    { lat: 32.761033, lng: 35.019531 },
    { lat: 32.761059, lng: 35.019671 },
    { lat: 32.760919, lng: 35.019733 },
    { lat: 32.760482, lng: 35.020131 },
    { lat: 32.760568, lng: 35.020181 },
    { lat: 32.760706, lng: 35.020186 },
    { lat: 32.760803, lng: 35.020159 },
    { lat: 32.760971, lng: 35.02017 },
    { lat: 32.761009, lng: 35.020162 },
    { lat: 32.761205, lng: 35.020409 },
  ];

  const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 4,
  };

  function handleClick(event, route) {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();

    console.log("lat:", lat, " lng:", lng);

    props.setSelectedRoute({ lat, lng, route });
  }

  return (
    <>
      <Polyline
        path={roadA}
        onClick={(e) => {
          handleClick(e, "A");
          console.log("roadA");
        }}
        options={{
          strokeColor: "#ff00ff",
          strokeOpacity: 0,
          strokeWeight: 8,
          icons: [
            {
              icon: lineSymbol,
              offset: "0",
              repeat: "20px",
            },
          ],
        }}
      />

      <Polyline
        path={roadB}
        onClick={(e) => {
          handleClick(e, "B");
          console.log("roadB");
        }}
        options={{
          strokeColor: "#00ffff",
          strokeOpacity: 0.5,
          strokeWeight: 14,
          icons: [
            {
              icon: "hello",
              offset: "0",
              repeat: "50px",
            },
          ],
        }}
      />

      <Polyline
        path={roadC}
        onClick={(e) => {
          handleClick(e, "C");
          console.log("roadC");
        }}
        options={{
          strokeColor: "#ffff00",
          strokeOpacity: 1,
          strokeWeight: 4,
          icons: [
            {
              icon: "hello",
              offset: "0",
              repeat: "10px",
            },
          ],
        }}
      />
    </>
  );
};
