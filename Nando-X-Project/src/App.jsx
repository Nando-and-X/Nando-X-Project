import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleNavbar from "./components/Navbar";
import HomePage from "./components/home-page";
import ForecastPage from "./components/forecast-page";
import JokePage from "./components/joke-page";
import "./App.css";

function App() {
  return (
    <Router>
        <CollapsibleNavbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forecast-page" element={<ForecastPage />} />
            <Route path="/joke-page" element={<JokePage />} />
        </Routes>
    </Router>
  );
}

export default App;