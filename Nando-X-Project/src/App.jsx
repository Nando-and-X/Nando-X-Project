import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleNavbar from "./components/Navbar";
import HomePage from "./components/home-page";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchData from "./joke";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CollapsibleNavbar />
      <HomePage />

      {/* Retaining the logos and joke fetching functionality */}
      <div className="logo-section">
        <img src={reactLogo} alt="React Logo" width={50} />
        <img src={viteLogo} alt="Vite Logo" width={50} />
      </div>

      {/* Fetch Data Component */}
      <FetchData />

      {/* Example counter functionality */}
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default App;

