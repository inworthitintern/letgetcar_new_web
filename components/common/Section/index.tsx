import React from "react";

interface ISectionProps {
  children: React.ReactNode;
  bgType?: "white" | "gray" | "primary";
  className?: string;
}

const Section: React.FC<ISectionProps> = ({
  children,
  className = "",
  bgType = "white",
}) => {
  return (
    <div
      className={`py-10  md:py-20 ${
        bgType === "white"
          ? "bg-white"
          : bgType === "primary"
          ? "bg-primary"
          : "bg-[#f0f0f0]"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
