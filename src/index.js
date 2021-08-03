import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/white-notas/">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
