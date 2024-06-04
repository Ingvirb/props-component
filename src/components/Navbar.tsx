// src/components/Navbar.tsx
import React from "react";
import Button from "./Button";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const handleClick = (label: string) => {
    alert(`${label} button clicked!`);
  };

  return (
    <nav className={styles.navbar}>
      <Button
        label="Heim"
        onClick={() => handleClick("Home")}
        variant="primary"
      />
      <Button
        label="Um mig"
        onClick={() => handleClick("About")}
        variant="secondary"
      />
      <Button
        label="Aðstoð"
        onClick={() => handleClick("Services")}
        variant="success"
      />
      <Button
        label="Hafa samband"
        onClick={() => handleClick("Contact")}
        variant="primary"
      />
    </nav>
  );
};

export default Navbar;
