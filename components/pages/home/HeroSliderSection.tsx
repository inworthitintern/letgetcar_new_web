import { Button } from "@/components/UI";
import React from "react";

interface IHeroSliderSectionProps {
  image: any;
  headingFirst: string;
  headingLast: string;
  paragraph: string;
  btnText: string;
  btnOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ctnRedirect: string;
}

const HeroSliderSection: React.FC<IHeroSliderSectionProps> = ({
  image,
  headingFirst,
  headingLast,
  paragraph,
  btnText,
  btnOnClick,
}) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="h-screen max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
        <div>
          <h1 className="font-poppins text-2xl md:text-5xl font-bold text-white w-2/3">
            {headingFirst} <span className="text-primary">{headingLast}</span>
          </h1>
          <p className="text-sm md:text-base text-white font-normal w-2/3 py-6">
            {paragraph}
          </p>
          <Button text={btnText} type="primary" onClick={btnOnClick} />
        </div>
      </div>
    </div>
  );
};

export default HeroSliderSection;
