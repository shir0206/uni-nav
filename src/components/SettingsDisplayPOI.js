import React, { useState, useEffect, useCallback, useRef } from "react";
import "./settingsDisplayPOI.css";

export const SettingsDisplayPOI = (props) => {
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const handleChange = (event) => {
    // updating an object instead of a Map
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);

  const markerIcon =
    "https://www.flaticon.com/svg/static/icons/svg/787/787535.svg";

  const benchIcon =
    "https://www.flaticon.com/svg/static/icons/svg/183/183449.svg";

  const tableIcon =
    "https://www.flaticon.com/svg/static/icons/svg/3113/3113709.svg";

  const areaIcon =
    "https://www.flaticon.com/svg/static/icons/svg/972/972263.svg";

  const historyIcon =
    "https://www.flaticon.com/svg/static/icons/svg/1277/1277727.svg";

  const statueIcon =
    "https://www.flaticon.com/svg/static/icons/svg/3205/3205261.svg";

  const checkboxes = [
    {
      name: "bench",
      key: "bench",
      label: "ספסל",
      icon: benchIcon,
    },
    {
      name: "area",
      key: "area",
      label: "איזור",
      icon: areaIcon,
    },
    {
      name: "table",
      key: "table",
      label: "שולחן",
      icon: tableIcon,
    },
    {
      name: "statue",
      key: "statue",
      label: "פסל",
      icon: statueIcon,
    },
    {
      name: "lookout",
      key: "lookout",
      label: "תצפית",
      icon: markerIcon,
    },
    {
      name: "history",
      key: "history",
      label: "אתר היסטורי",
      icon: historyIcon,
    },
  ];

  return (
    <div className="display-poi">
      <lable>מה יוצג במפה</lable> <br />
      {checkboxes.map((item) => (
        <label key={item.key}>
          {item.label}
          <img
            src={item.icon}
            alt={item.name}
            className="checkbox-icon"
          ></img>
          <input
            type="checkbox"
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
          
        </label>
      ))}


    </div>
  );
};
