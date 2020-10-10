import React, { useState, useEffect, useCallback, useRef } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Polyline,
  withScriptjs,
  withGoogleMap,

} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  const libraries = ["places"];

  //map loading msg
  //    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  const { isLoaded, loadError } = useLoadScript({
    // googleMapsApiKey: "AIzaSyAb5I39P1GekwpMaU0BEYI75p04ZaoXIbo",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    region:"IL",
    language:"iw",
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
    lat: 32.7623612,
    lng: 35.0200327,
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
    "https://www.flaticon.com/svg/static/icons/svg/787/787535.svg";

  const roadA = [
    { lat: 32.7640483, lng: 35.0166316 },
    { lat: 32.763692, lng: 35.017082 },
    { lat: 32.763361, lng: 35.016665 },

    { lat: 32.7620995, lng: 35.0182302 },
    { lat: 32.7623612, lng: 35.0200327 },
    { lat: 32.763234, lng: 35.019025 },
    { lat: 32.7628534, lng: 35.0185092 },
  ];

  const roadB = [
    { lat: 32.762666, lng: 35.016366 },
    { lat: 32.762135, lng: 35.016931 },
    { lat: 32.761276, lng: 35.018554 },
    { lat: 32.760545, lng: 35.019495 },
  ];

  const roadC = [
    { lat: 32.761987, lng: 35.018321 },
    { lat: 32.761033, lng: 35.019531 },
    { lat: 32.761059, lng: 35.019671 },
    { lat: 32.760919, lng: 35.019733 },
    { lat: 32.760482, lng: 35.020131 },
    { lat: 32.760568, lng: 35.020181 },
    { lat: 32.760706, lng: 35.020186 },
    { lat: 32.760803, lng: 35.020159 },
    { lat: 32.760971, lng: 35.02017 },
    { lat: 32.761009, lng: 35.020162 },
    { lat: 32.761205, lng: 35.020409 },
  ];

  return (
    <div className="App">
      <h4>
        Uni-Nav <span>{element}</span>
      </h4>

      <Search></Search>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Polyline
          path={roadA}
          options={{
            strokeColor: "#FFFF00",
            strokeOpacity: 1,
            strokeWeight: 8,
            icons: [
              {
                icon: "hello",
                offset: "0",
                repeat: "10px",
              },
            ],
          }}
        />

        <Polyline
          path={roadB}
          options={{
            strokeColor: "#00FF00",
            strokeOpacity: 0.5,
            strokeWeight: 14,
            icons: [
              {
                icon: "hello",
                offset: "0",
                repeat: "50px",
              },
            ],
          }}
        />

        <Polyline
          path={roadC}
          options={{
            strokeColor: "#FF69B4",
            strokeOpacity: 1,
            strokeWeight: 4,
            icons: [
              {
                icon: "hello",
                offset: "0",
                repeat: "10px",
              },
            ],
          }}
        />
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

function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 32.77005, lng: () => 35.008688 },
      radius: 200 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          try {
            const results = await getGeocode({ address });
            console.log(results);
          } catch (error) {
            console.log("error");
          }

          console.log(address);
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an address"
        />

        <ComboboxPopover>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default App;
