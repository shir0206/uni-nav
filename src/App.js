import React from 'react';

import{
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import {formatRelative} from "date-fns";
// import "@reach/combobox/styles.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import "./App.css";

function App() {

  const libraries = ["places"];

  // map size style
  const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
  };


  const center = {
    lat: 32.770050,
    lng: 35.008688,
  };


  // disableDefaultUI Btns: Map, Satellite
  // zoomControl Btns: +, -
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl:true,
  };

  //map loading msg
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";


  const element = <FontAwesomeIcon icon={faCoffee}  />



  return (
    <div className="App">
      <h4>Uni-Nav <span>{element}</span></h4>
      <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={18}
      center={center}
      options={options}
      onClick={(event)=>{console.log(event)}}
      ></GoogleMap>
    </div>
  );
}

export default App;
