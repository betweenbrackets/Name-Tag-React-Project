import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
// import of a named export
import { names } from "./data.js";

import "./styles.css";

// write the callback function that will accept a name and returns a NameTag component
// this is tricky: the callback function handles a single array object. The array is names. The single array object is name. Name is the prop that passes the names array attributes.
const renderNameTag = (name) => <NameTag name={name.person} key={name.id} />;

const App = () => {
  // explicit return (more than one)
  // map over the array
  const NameTagElements = names.map(renderNameTag);

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
