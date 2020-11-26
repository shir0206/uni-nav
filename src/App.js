import React, { useState } from "react";

import { Locate } from "./components/Locate";
import { Settings } from "./components/Settings";
import { MapTitle } from "./components/MapTitle";
import { Map } from "./components/Map";

import "./App.css";

function App() {
  const [isDragged, setIsDragged] = useState(false);
  const [locate, setLocate] = useState(false);
  const [displayPoiType, setDisplayPoiType] = useState({
    bench: false,
    area: true,
    table: false,
    statue: true,
    lookout: true,
    history: true,
  });

  return (
    <div className="App">
      <MapTitle></MapTitle>

      <Settings
        displayPoiType={displayPoiType}
        setDisplayPoiType={setDisplayPoiType}
      ></Settings>

      <Locate
        locate={locate}
        setLocate={setLocate}
        setIsDragged={setIsDragged}
      ></Locate>

      <Map
        setIsDragged={setIsDragged}
        isDragged={isDragged}
        locate={locate}
        displayPoiType={displayPoiType}
      ></Map>
    </div>
  );
}

export default App;
