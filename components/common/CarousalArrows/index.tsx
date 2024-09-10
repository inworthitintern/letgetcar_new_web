import { LeftChevronIcon } from "@/components/svgs";
import React from "react";

interface IArrowsProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const SampleNextArrow: React.FC<IArrowsProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`${className} -translate-y-10 z-10 -translate-x-4`}
      //   style={{ background: "transparent" }}
      onClick={onClick}
    >
      <div className="rotate-180">
        <LeftChevronIcon height={40} width={40} />
      </div>
    </div>
  );
};

const SamplePrevArrow: React.FC<IArrowsProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`${className} -translate-y-10 z-10 translate-x-4 `}
      //   style={{ background: "transparent" }}
      onClick={onClick}
    >
      <LeftChevronIcon height={40} width={40} />
    </div>
  );
};

export { SampleNextArrow, SamplePrevArrow };
