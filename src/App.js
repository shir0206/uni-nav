import React from 'react';

import{
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import {formatRelative} from "date-fns";
// import "@reach/combobox/styles.css"



function App() {

  const libraries = ["places"];
  const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
  };
  const center = {
    lat: 32.770050,
    lng: 35.008688,
  };
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className="App">
      <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={18}
      center={center}
      ></GoogleMap>
    </div>
  );
}

export default App;
