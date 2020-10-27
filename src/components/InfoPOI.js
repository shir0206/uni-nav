import React from "react";
import "./infoPOI.css";

import { InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";


export const InfoPOI = (props) => {
  return (
    <>
      {props.selected ? (
        <InfoWindow
          position={{ lat: props.selected.lat, lng: props.selected.lng }}
          onCloseClick={() => {
            props.setSelected(null);
          }}
        >
          <div>
            <h2>
              <span role="img" aria-label="bear">
                🐻
              </span>
              שלום
            </h2>
            <p>Time: {formatRelative(props.selected.time, new Date())}</p>
            <img
              src="https://www.srugim.co.il/i/wp-content/uploads/2015/06/%D7%90%D7%95%D7%A0%D7%99%D7%91%D7%A8%D7%A1%D7%99%D7%98%D7%AA-%D7%97%D7%99%D7%A4%D7%94-%D7%90%D7%9C%D7%A2%D7%93-%D7%92%D7%A8%D7%A9%D7%92%D7%95%D7%A8%D7%9F-%D7%98%D7%9E%D7%A7%D7%90__w650h331q80.jpg"
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
