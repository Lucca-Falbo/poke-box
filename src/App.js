import "./App.css";
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import CardShower from "./CardShower";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardShower />
    </div>
  );
}

export default App;
