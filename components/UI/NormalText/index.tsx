import React from "react";
import classNames from "classnames";

interface INormalTextProps {
  text: string | number;
  type?: "span" | "p";
  color?: "primary" | "dark" | "gray" | "success" | "danger";
  fontWeight?: "regular" | "medium" | "semiBold" | "bold";
  textAlign?: "center" | "right" | "left" | "justify";
  size?: "lg" | "md" | "sm" | "xs";
  textUnderline?: boolean;
  cursorEnabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  hoverColor?: "primary" | "dark" | "gray" | "success" | "danger";
  className?: string;
}

const NormalText: React.FC<INormalTextProps> = ({
  text,
  type = "span",
  size = "md",
  color = "dark",
  fontWeight = "regular",
  textAlign = "left",
  textUnderline = false,
  cursorEnabled = false,
  onClick,
  hoverColor = color,
  className = "",
}) => {
  const NormalTextTag = type;

  const NormalTextClass = classNames({
    "text-primary-text": color === "primary",
    "text-dark": color === "dark",
    "text-gray-500": color === "gray",
    "text-success": color === "success",
    "text-danger": color === "danger",
    "font-normal": fontWeight === "regular",
    "font-medium": fontWeight === "medium",
    "font-semibold": fontWeight === "semiBold",
    "font-bold": fontWeight === "bold",
    "text-xl": size === "lg",
    "text-base": size === "md",
    "text-sm": size === "sm",
    "text-xs": size === "xs",
    "text-center": textAlign === "center",
    "text-left": textAlign === "left",
    "text-right": textAlign === "right",
    underline: textUnderline === true,
    "no-underline": textUnderline === false,
    "cursor-pointer": cursorEnabled === true,
    "cursor-auto": cursorEnabled === false,

    // Hover
    "hover:text-primary-text": hoverColor === "primary",
    "hover:text-dark": hoverColor === "dark",
    "hover:text-gray-500": hoverColor === "gray",
    "hover:text-success": hoverColor === "success",
    "hover:text-danger": hoverColor === "danger",
    "transition-all": true,
  });

  return (
    <NormalTextTag
      className={`${NormalTextClass} ${className}`}
      onClick={onClick}
    >
      {text}
    </NormalTextTag>
  );
};

export default NormalText;
