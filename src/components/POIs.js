import React, { useState, useCallback, useRef } from "react";
import "./POIs.css";
import { Marker } from "@react-google-maps/api";

export const POIs = (props) => {
  // Add manual marker on the map.

  
  function displayMarkerIcon(type) {
    const markerIcon =
      "https://www.flaticon.com/svg/static/icons/svg/787/787535.svg";

    const benchIcon =
      "https://www.flaticon.com/svg/static/icons/svg/183/183449.svg";

      const picnicTableIcon =
      "https://www.flaticon.com/svg/static/icons/svg/3113/3113709.svg";

      const areaIcon =
      "https://www.flaticon.com/svg/static/icons/svg/972/972263.svg";

      const touristIcon =
      "https://www.flaticon.com/svg/static/icons/svg/2965/2965715.svg";

      const statueIcon =
      "https://www.flaticon.com/svg/static/icons/svg/3205/3205261.svg";

      switch (type) {
      case "bench":
        return benchIcon;
      case "area":
        return areaIcon;
      case "tourist":
        return touristIcon;
      case "statue":
        return statueIcon;
      case "picnic-table":
        return picnicTableIcon;
    }
    return markerIcon;
  }

  // url = svg source
  // scaledSize = icon size
  // origin = icon location reltivly the mouse click
  // anchor = icon location reltivly the mouse click

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
            url: displayMarkerIcon(poi.type),
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
      ))}
    </>
  );
};
