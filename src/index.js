import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Style/Nav.css";
import "./Style/Main.css";
import "./Style/About.css";
import "./Style/Menu.css";
import "./Style/Review.css";
import "./Style/Expert.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
