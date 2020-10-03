import React, { useState, useEffect, useCallback, useRef } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";
// import "@reach/combobox/styles.css"

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  const libraries = ["places"];

  //map loading msg
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

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
  }, []);

  const mapRef = useRef();

  //map from Google Maps
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

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

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  const element = <FontAwesomeIcon icon={faCoffee} />;

  const markerIcon =
    "https://www.flaticon.com/svg/static/icons/svg/3528/3528209.svg";

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
        onLoad={onMapLoad}
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
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: markerIcon,
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  🐻
                </span>
                Alert
              </h2>
              <p>Time: {formatRelative(selected.time, new Date())}</p>
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
      </GoogleMap>
    </div>
  );
}

export default App;
