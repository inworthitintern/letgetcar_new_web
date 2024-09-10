import React from "react";
import Container from "../Container";
import { Heading, NormalText } from "@/components/UI";
import Spacer from "../Spacer";

interface IAboutus {
  img: any;
  title: string;
  desc: string;
}

const AboutUsSection: React.FC<IAboutus> = ({ img, desc, title }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-8">
        <img src={img.src} alt="hire Driver" />
        <div>
          <Heading text={title} type="h4" textAlign="left" />
          <Spacer spacing="sm" />
          <NormalText size="sm" color="gray" text={desc} />
        </div>
      </div>
    </Container>
  );
};

export default AboutUsSection;
