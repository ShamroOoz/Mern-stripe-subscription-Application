import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ServicesProvider } from "./Context/ServicesContext";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { fetchFromAPI } from "./Utils/helpers";

let stripePromise;

const getStripe = async () => {
  if (!stripePromise) {
    const { publishableKey } = await fetchFromAPI("config", {
      method: "GET",
    });
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Elements stripe={getStripe()}>
      <ServicesProvider>
        <App />
      </ServicesProvider>
    </Elements>
  </BrowserRouter>
);
