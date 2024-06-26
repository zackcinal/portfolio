import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import './Fonts/Nacelle/Nacelle-SemiBold.otf'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();
