import React, { useState, useEffect, useCallback } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";
// import "@reach/combobox/styles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  const [markers, setMarkers] = useState([]);

  
  // avoid recreading onclick on every single render of the app
  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
    console.log(event);
  }, [])



  
  const libraries = ["places"];

  // map size style
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: 32.77005,
    lng: 35.008688,
  };

  // disableDefaultUI Btns: Map, Satellite
  // zoomControl Btns: +, -
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  //map loading msg
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  const element = <FontAwesomeIcon icon={faCoffee} />;

  const markerIcon = "https://www.flaticon.com/svg/static/icons/svg/3528/3528209.svg";


  return (
    <div className="App">
      <h4>
        Uni-Nav <span>{element}</span>
      </h4>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
        options={options}
        onClick={onMapClick}
      >

        {/* Add manual marker on the map.
        
        url = svg source
        scaledSize = icon size
        origin = icon location reltivly the mouse click
        anchor = icon location reltivly the mouse click

        */}
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: markerIcon,
              scaledSize: new window.google.maps.Size(30,30),
              origin: new window.google.maps.Point(0,0),
              anchor: new window.google.maps.Point(15,15),
            
            }}
          
          
          />
        ))}


      </GoogleMap>
    </div>
  );
}

export default App;
