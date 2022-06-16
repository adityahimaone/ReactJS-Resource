import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setshowParagraph] = useState(false);

  console.log("App Running");
  // use callback to avoid re-rendering the whole component
  // use callback store funtion in a memory react
  const toogleParagrahpHandler = useCallback(() => {
    setshowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <DemoOutput />}
      <Button onClick={toogleParagrahpHandler}>Click me!</Button>
    </div>
  );
}

export default App;
