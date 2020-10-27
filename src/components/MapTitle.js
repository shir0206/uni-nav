import React from "react";
import "./mapTitle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const MapTitle = (props) => {
  const element = <FontAwesomeIcon icon={faCoffee} />;

  return (
    <h4 className="mapTitle">
      Uni-Nav <span>{element}</span>
    </h4>
  );
};
