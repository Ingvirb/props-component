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
      <h1 className="header">Module 4, guide 3</h1>
      <div className="container">
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
          label="staðist????"
          onClick={handleClick}
          variant="primary"
          block
        />
      </div>
    </div>
  );
};

export default App;
