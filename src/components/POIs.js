import React, { useState, useCallback, useRef } from "react";
import "./POIs.css";
import { Marker } from "@react-google-maps/api";

export const POIs = (props) => {
  // Add manual marker on the map.

  const markerIcon =
    "https://www.flaticon.com/svg/static/icons/svg/787/787535.svg";

  // url = svg source
  // scaledSize = icon size
  // origin = icon location reltivly the mouse click
  // anchor = icon location reltivly the mouse click



  // {props.markers.map((marker) => (
  //   <Marker
  //     key={marker.time.toISOString()}
  //     position={{ lat: marker.lat, lng: marker.lng }}
  //     onClick={() => {
  //       props.setSelected(marker);
  //     }}
  //     icon={{
  //       url: markerIcon,
  //       scaledSize: new window.google.maps.Size(30, 30),
  //       origin: new window.google.maps.Point(0, 0),
  //       anchor: new window.google.maps.Point(15, 15),
  //     }}
  //   />
  // ))}

  return (
    <>
     
      {props.pois.map((poi) => (
        <Marker
          key={poi.id}
          position={{ lat: poi.location.lat, lng: poi.location.lng }}
          onClick={() => {
            props.setSelected(poi);
          }}
          icon={{
            url: markerIcon,
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
      ))}
    </>
  );
};
