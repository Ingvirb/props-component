import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  variant?: "primary" | "secondary" | "success";
  size?: "small" | "medium" | "large";
  outline?: boolean;
  block?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  style,
  className,
  variant = "primary",
  size = "medium",
  outline = "false",
  block = "false",
}) => {
  const classes = `
  ${styles.button} 
  ${styles[variant]} 
  ${styles[size]} 
  ${outline ? styles.outline : ""} 
  ${block ? styles.block : ""}
  ${className}
`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={classes}
    >
      {label}
    </button>
  );
};

export default Button;
