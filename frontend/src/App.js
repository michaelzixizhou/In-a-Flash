import "./App.css";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

import tooltip  from 'react-tooltip';

const markers = [
  {
    markerOffset: -15,
    name: "s"
  }
]
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function App() {
  const [content, setcontent] = useState("");
  return (
    <div className="App" style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#F0F0F9",
      fill: "#68C5D3",
      fontSize: "200"
    }}
    >
      <h1>In A Flash</h1>
      {/* <tooltip>{content}</tooltip> */}
      <div style={{ width: "100%"}}>
        <ComposableMap data-tip="">
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({geographies}) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setcontent(`${NAME}`)
                    }}
                    onMouseDown={() => {
                      setcontent("");
                    }}
                    style={{
                      hover: {
                        fill: "#F53",
                        outline: "None"
                      }
                    }}
                  />
                ))
              
              }
              
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default App;
