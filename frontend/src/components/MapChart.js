import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { useNavigate } from "react-router-dom";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = () => {
  const [content, setcontent] = useState("");

  const markers = [
    {
      markerOffset: -15,
      name: "Canada",
      coordinates: [-110, 55],
    },
    {
      markerOffset: -15,
      name: "United States",
      coordinates: [-100, 39],
    },
    { markerOffset: -15, name: "Chad", coordinates: [19, 15] },
    { markerOffset: -15, name: "China", coordinates: [100, 35] },
    { markerOffset: -15, name: "India", coordinates: [78, 20] },
  ];

  const navigate = useNavigate();

  const handleClick = (geo) => () => {
    // do stuff with `geography`
    console.log(geo.id);
    let path = "country/" + geo.id;
    navigate(path);
  };

  return (
    <div style={{ width: "50%", height: "50%" }}>
      <ComposableMap data-tip="">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                onClick={handleClick(geo)}
                key={geo.id}
                geography={geo}
                onMouseEnter={() => {
                  setcontent(`${geo.properties.name}`);
                }}
                onMouseLeave={() => {
                  setcontent("");
                }}
                style={{
                  hover: {
                    fill: "#FFF",
                    outline: "None",
                  },
                  pressed: {
                    fill: "#FFF",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#000000" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
