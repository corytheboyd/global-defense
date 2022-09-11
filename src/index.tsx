import "./index.css";
import "tuicss/dist/tuicss.js";
import "tuicss/dist/tuicss.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
