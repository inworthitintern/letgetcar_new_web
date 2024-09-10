import React from "react";
import classNames from "classnames";

interface IHeadingProps {
  text: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | "dark" | "gray" | "success" | "danger";
  fontWeight?: "bold" | "semiBold";
  textAlign?: "center" | "right" | "left";
  className?: string;
}

const Heading: React.FC<IHeadingProps> = ({
  text,
  type = "h2",
  color = "dark",
  fontWeight = "bold",
  textAlign = "center",
  className = "",
}) => {
  const HeadingTag = type;

  const headingClass = classNames({
    "text-primary-text": color === "primary",
    "text-dark": color === "dark",
    "text-gray-500": color === "gray",
    "text-success": color === "success",
    "text-danger": color === "danger",
    "font-bold": fontWeight === "bold",
    "font-semibold": fontWeight === "semiBold",
    "text-5xl": type === "h1",
    "text-xl md:text-4xl": type === "h2",
    "text-3xl": type === "h3",
    "text-2xl": type === "h4",
    "text-xl": type === "h5",
    "text-lg": type === "h6",
    "text-center": textAlign === "center",
    "text-left": textAlign === "left",
    "text-right": textAlign === "right",
  });

  return (
    <HeadingTag className={`${headingClass} ${className}`}>{text}</HeadingTag>
  );
};

export default Heading;
