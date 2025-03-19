import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleNavbar from "./components/Navbar";
import HomePage from "./components/home-page";
import "./App.css";

function App() {

  return (
    <div>
      <CollapsibleNavbar />
      <HomePage />
    </div>
  );
}

export default App;

