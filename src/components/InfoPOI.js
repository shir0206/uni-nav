import React from "react";
import "./infoPOI.css";

import { InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";

export const InfoPOI = (props) => {
  return (
    <>
      {props.selected ? (
        <InfoWindow
          position={{
            lat: props.selected.location.lat,
            lng: props.selected.location.lng,
          }}
          onCloseClick={() => {
            props.setSelected(null);
          }}
        >
          <div className="infoPoi">
            <h2>
              <span role="img" aria-label="bear">
                🐻
              </span>
              {props.selected.desc}
            </h2>
            <p>{props.selected.desc}</p>
            {props.selected.img && (
              <img
                src={require("../images/" + props.selected.img + ".jpeg")}
                alt="uni"
                width="100px"
                height="100px"
              ></img>
            )}
          </div>
        </InfoWindow>
      ) : (
        console.log("InfoPOI selected: ", props.selected)
      )}
    </>
  );
};
