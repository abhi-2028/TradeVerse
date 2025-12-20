import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./app/App";
import { GeneralProvider } from "./context/GeneralContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </BrowserRouter>
);
