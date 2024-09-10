import { Button, Heading, NormalText } from "@/components/UI";
import React from "react";
import Spacer from "../Spacer";
import Section from "../Section";
import Container from "../Container";

interface ICtnSection {
  title: string;
  desc: string;
  ctnText: string;
  ctnOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CtnSection: React.FC<ICtnSection> = ({
  title,
  desc,
  ctnText = "Get It Done",
  ctnOnClick,
}) => {
  return (
    <Section bgType="primary" className="mt-0">
      <Container>
        <Heading text={title} type="h3" textAlign="left" />
        <Spacer spacing="sm" />
        <NormalText size="sm" color="gray" text={desc} />
        <Spacer spacing="sm" />
        <Button text={ctnText} type="dark" onClick={ctnOnClick} />
      </Container>
    </Section>
  );
};

export default CtnSection;
