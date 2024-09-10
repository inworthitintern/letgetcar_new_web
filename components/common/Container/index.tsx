import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-2 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
