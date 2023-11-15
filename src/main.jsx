import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import { App } from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter basename="/">
    <React.StrictMode>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </React.StrictMode>
  </HashRouter>
);