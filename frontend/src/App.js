import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import CountryPage from "./components/CountryPage";
import Login from "./components/Login";
import MapPage from "./components/MapPage";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#4169e1",
        fill: "#68C5D3",
        fontSize: "200",
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/country/CAN"
            element={<CountryPage country="Canada" />}
          ></Route>
          <Route
            path="/country/USA"
            element={<CountryPage country="United States of America" />}
          ></Route>
          <Route
            path="/country/TCD"
            element={<CountryPage country="Chad" />}
          ></Route>
          <Route
            path="/country/IND"
            element={<CountryPage country="India" />}
          ></Route>
          <Route
            path="/country/CHN"
            element={<CountryPage country="China" />}
          ></Route>
          <Route path="/" element={<MapPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
