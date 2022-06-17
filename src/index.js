import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Hello Name Tag Generator</h1>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
