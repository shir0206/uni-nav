import React, { useState, useCallback, useRef } from "react";

import mapPOIs from "../mapPOIs/mapPOIs";

function ConnectDB() {
  console.log("mapPOIs" + mapPOIs[0].type);
  return mapPOIs;
}

export default ConnectDB;
