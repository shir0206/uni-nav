import React, { useState, useCallback, useRef, useEffect } from "react";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import { Routes } from "./Routes";
import { POIs } from "./POIs";
import { UserLocationTimer } from "./UserLocationTimer";
import { UserLocationMarker } from "./UserLocationMarker";

import { InfoRoute } from "./InfoRoute";
import { InfoPOI } from "./InfoPOI";

import mapPOIs from "./../mapPOIs/mapPOIs";
import mapStyles from "./../mapStyles/mapStyles";

export const Map = (props) => {
  const [pois, setPois] = useState(mapPOIs);
  const [markers, setMarkers] = useState([]);
  const [userLocationCoords, setUserLocationCoords] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [center, setCenter] = useState({
    lat: 32.760803,
    lng: 35.020159,
  });

  const libraries = ["places"];

  // styles: imported
  // disableDefaultUI: View Butons: (Map)/(Satellite)
  // zoomControl: Zoom Butons: (+)/(-)
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: false,
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
    setUserLocationCoords({ lat, lng });
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(20);
    mapRef.current.setCenter({ lat, lng });
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={17}
      center={center}
      options={options}
      onClick={onMapClick}
      onLoad={onMapLoad}
      onDrag={() => {
        props.setIsDragged(true);
      }}
      onDragEnd={() => {
        props.setIsDragged(true);
      }}
    >
      <Routes setSelectedRoute={setSelectedRoute}></Routes>

      <POIs
        markers={markers}
        setSelected={setSelected}
        pois={pois}
        displayPoiType={props.displayPoiType}
      ></POIs>

      <InfoPOI selected={selected} setSelected={setSelected}></InfoPOI>

      <InfoRoute
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
      ></InfoRoute>

      {props.locate &&
        (props.isDragged ? (
          <UserLocationMarker
            userLocationCoords={userLocationCoords}
          ></UserLocationMarker>
        ) : (
          <UserLocationTimer
            userLocationCoords={userLocationCoords}
            setUserLocationCoords={setUserLocationCoords}
            panTo={panTo}
          ></UserLocationTimer>
        ))}
    </GoogleMap>
  );
};
