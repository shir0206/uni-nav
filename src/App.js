import React, { useState, useCallback, useRef } from "react";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import { Locate } from "./components/Locate";
import { MapTitle } from "./components/MapTitle";
import { Search } from "./components/Search";
import { Routes } from "./components/Routes";
import { POIs } from "./components/POIs";
import { InfoRoute } from "./components/InfoRoute";
import { InfoPOI } from "./components/InfoPOI";
import ConnectDB from "./connectDB/connectDB";

import mapStyles from "./mapStyles/mapStyles";

import "./App.css";

function App() {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const libraries = ["places"];

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

  const center = {
    lat: 32.761987,
    lng: 35.018321,
  };

    ////////////////////////////////////

    const panTo = useCallback(({ lat, lng }) => {
      setMarkers((current) => [
        ...current,
        {
          lat: lat,
          lng: lng,
          time: new Date(),
        },
      ]);
  
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(18);
    }, []);
  
    ////////////////////////////////////
  const panTo2 = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(18);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className="App">
      <MapTitle></MapTitle>

      <Search></Search>

      <Locate panTo={panTo} options={options}></Locate>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Routes setSelectedRoute={setSelectedRoute}></Routes>

        <POIs markers={markers} setSelected={setSelected}></POIs>

        <InfoPOI selected={selected} setSelected={setSelected}></InfoPOI>

        <InfoRoute
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
        ></InfoRoute>
      </GoogleMap>
    </div>
  );
}

export default App;
