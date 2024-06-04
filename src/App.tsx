// src/App.tsx
import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  const handleClick = () => {
    alert("til hamingju!");
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1 className="header">Module 4, guide 3</h1>
        <Button label="staðist?" onClick={handleClick} variant="primary" />
        <Button
          label="staðist??"
          onClick={handleClick}
          variant="secondary"
          size="small"
        />
        <Button
          label="staðist???"
          onClick={handleClick}
          variant="success"
          size="large"
          outline
        />
        <Button
          label="Block Button"
          onClick={handleClick}
          variant="primary"
          block
        />
      </div>
    </div>
  );
};

export default App;
