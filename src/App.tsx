// src/App.tsx
import React from "react";
import Button from "./components/Button";
import "./App.css";

const App: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container">
      <h1 className="header">Module 4, guide 2</h1>
      <Button label="Staðist?" onClick={handleClick} className={""} />
    </div>
  );
};

export default App;
