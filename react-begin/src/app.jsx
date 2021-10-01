import React from "react";
import Hello from "./hello";
import "./app.css";
import Child from "./child";

function App() {
  return (
    <Child>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Child>
  );
}

export default App;
