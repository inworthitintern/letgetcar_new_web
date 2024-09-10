import classNames from "classnames";
import React from "react";

interface ISpacingProps {
  spacing?: "xl" | "lg" | "md" | "sm" | "xs";
}

const Spacer: React.FC<ISpacingProps> = ({ spacing = "lg" }) => {
  const spacingClass = classNames({
    "mt-16": spacing === "xl",
    "mt-10": spacing === "lg",
    "mt-7": spacing === "md",
    "mt-4": spacing === "sm",
    "mt-2": spacing === "xs",
  });

  return <div className={spacingClass}></div>;
};

export default Spacer;
