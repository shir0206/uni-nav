import React, { useState, useCallback, useRef, useEffect } from "react";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import { Locate } from "./components/Locate";
import { MapTitle } from "./components/MapTitle";
import { Routes } from "./components/Routes";
import { POIs } from "./components/POIs";
import { UserLocationTimer } from "./components/UserLocationTimer";
import { InfoRoute } from "./components/InfoRoute";
import { InfoPOI } from "./components/InfoPOI";
import ConnectDB from "./connectDB/connectDB";

import mapPOIs from "./mapPOIs/mapPOIs";
import mapStyles from "./mapStyles/mapStyles";

import "./App.css";

function App() {
  const [pois, setPois] = useState(mapPOIs);
  const [markers, setMarkers] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [locate, setLocate] = useState(false);

  const [center, setCenter] = useState({
    lat: 32.760803,
    lng: 35.020159,
  });

  const libraries = ["places"];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer(new Date().getTime());
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  // styles: imported
  // disableDefaultUI: View Butons: (Map)/(Satellite)
  // zoomControl: Zoom Butons: (+)/(-)
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  //map loading msg
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    region: "IL",
    language: "iw",
    libraries,
  });

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

  const panTo = useCallback(({ lat, lng }) => {
    setUserLocation({ lat, lng });
    setCenter({ lat, lng });

    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(18);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className="App">
      <MapTitle></MapTitle>

      <Locate panTo={panTo} locate={locate} setLocate={setLocate}></Locate>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Routes setSelectedRoute={setSelectedRoute}></Routes>

        <POIs markers={markers} setSelected={setSelected} pois={pois}></POIs>

        <InfoPOI selected={selected} setSelected={setSelected}></InfoPOI>

        <InfoRoute
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
        ></InfoRoute>

        {locate && (
          <UserLocationTimer
            userLocation={userLocation}
            setUserLocation={setUserLocation}
            panTo={panTo}
          ></UserLocationTimer>
        )}
      </GoogleMap>
    </div>
  );
}

export default App;
