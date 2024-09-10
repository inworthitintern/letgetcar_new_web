import React from "react";

interface IButtonProps {
  text: string;
  type?: "primary" | "dark" | "outlined";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  htmlType?: "submit" | "button" | "reset";
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  text,
  type = "primary",
  size = "md",
  icon,
  iconPosition = "end",
  onClick,
  className = "",
  htmlType = "submit",
  disabled = false,
}) => {
  let btnClass = type === "primary" ? "btn-primary" : "btn-dark";

  return (
    <button
      type={htmlType}
      className={`${btnClass} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
