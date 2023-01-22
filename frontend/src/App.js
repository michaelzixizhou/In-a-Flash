import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";

import Header from "./components/Header";
import HeaderParagraph from "./components/HeaderParagraph";
import tooltip  from 'react-tooltip';
import MapChart from "./components/MapChart";
import Navbar from "./components/Navbar";

const markers = [
  {
    markerOffset: -15,
    name: "s"
  }
]

function App() {
  return (
    <div className="App" style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#4169e1",
      fill: "#68C5D3",
      fontSize: "200"
    }}
    >
      <Router>
      <Navbar/>
      <Header></Header>
      <HeaderParagraph></HeaderParagraph>
      <MapChart></MapChart>
      </Router>
      
    </div>
  );
}

export default App;
