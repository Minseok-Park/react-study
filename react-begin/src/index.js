import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Hello from "./hello";
import Counter from "./components/counter";
import reportWebVitals from "./reportWebVitals";
import ContextSample from "./components/contextSample";

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
