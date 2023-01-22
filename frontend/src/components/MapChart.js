import React, { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";
import { Tooltip } from 'react-tooltip';

  
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = ( ) => {
    const [content, setcontent] = useState("");

    return (    <div style={{ width: "100%" , height:"70%"}}>
        <ComposableMap data-tip="">
            <ZoomableGroup>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
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
                                        outline: "None"
                                    },
                                    pressed: {
                                        fill: "#FFF",
                                        outline: "none"
                                      }
                                }}
                            />
                        ))
              
                    }
              
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    </div>)
      
}

export default MapChart;

