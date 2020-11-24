import React, { useRef, useEffect } from "react";
import "./POIs.css";
import { Marker } from "@react-google-maps/api";

export const UserLocationMarker = (props) => {
  // Add manual marker on the map.
  const userLocationCoordsIcon =
    "https://www.flaticon.com/svg/static/icons/svg/3528/3528209.svg";

  if (!props.userLocationCoords) return null;

  // url = svg source
  // scaledSize = icon size
  // origin = icon location reltivly the mouse click
  // anchor = icon location reltivly the mouse click
  if (props.userLocationCoords) {
    return (
      <Marker
        position={{
          lat: parseFloat(props.userLocationCoords.lat),
          lng: parseFloat(props.userLocationCoords.lng),
        }}
        icon={{
          url: userLocationCoordsIcon,
          scaledSize: new window.google.maps.Size(30, 30),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
        }}
      />
    );
  }
  return null;
};
