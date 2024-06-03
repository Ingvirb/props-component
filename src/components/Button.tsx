// src/components/Button.tsx
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  style,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`${styles.button} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
