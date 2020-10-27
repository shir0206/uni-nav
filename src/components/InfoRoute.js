import React from "react";
import "./infoRoute.css";

import { InfoWindow } from "@react-google-maps/api";

export const InfoRoute = (props) => {
  return (
    <>
      {props.selectedRoute ? (
        <InfoWindow
          position={{
            lat: props.selectedRoute.lat,
            lng: props.selectedRoute.lng,
          }}
          onCloseClick={() => {
            props.setSelectedRoute(null);
          }}
        >
          <div>
            <h2>
              <span role="img" aria-label="stars">
                ✨
              </span>
              {props.selectedRoute.route} מסלול
            </h2>
            <p>
              לה לה לה
              <span role="img" aria-label="bear">
                🍉
              </span>
            </p>
            <img
              src="https://static.wixstatic.com/media/c8dca1_b0fb31fc412a4ab192045566f189550d~mv2.jpg"
              alt="uni"
              width="100px"
              height="100px"
            ></img>
          </div>
        </InfoWindow>
      ) : (
        console.log("fail")
      )}
    </>
  );
};
