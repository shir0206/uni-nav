import React from "react";
import "./POIs.css";
import { Marker } from "@react-google-maps/api";

export const UserLocation = (props) => {
  // Add manual marker on the map.

  const userLocationIcon =
    "https://www.flaticon.com/svg/static/icons/svg/1831/1831908.svg";

  if (props.userLocation.lat && props.userLocation.lng) {
    console.log(
      "render UserLocation: ",
      props.userLocation.lat,
      props.userLocation.lng
    );
  }
  // url = svg source
  // scaledSize = icon size
  // origin = icon location reltivly the mouse click
  // anchor = icon location reltivly the mouse click
  if (props.userLocation)
    return (
      <>
        <Marker
          position={{
            lat: props.userLocation.lat,
            lng: props.userLocation.lng,
          }}
          icon={{
            url: userLocationIcon,
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
      </>
    );
  else return null;
};
