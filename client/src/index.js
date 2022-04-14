import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ServicesProvider } from "./Context/ServicesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ServicesProvider>
      <App />
    </ServicesProvider>
  </BrowserRouter>
);
