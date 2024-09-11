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
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Heading text={title} type="h3" textAlign="left" />
            <Spacer spacing="sm" />
            <NormalText size="sm" color="gray" text={desc} />
            <Spacer spacing="sm" />
            <Button text={ctnText} type="dark" onClick={ctnOnClick} />
          </div>
          <div className="flex items-center justify-end mt-4 md:mt-0">
            <img
              src="https://media-ae.cars24.com/production/consumer-web-ae/240904190339/js/decea0e609ec1915da37a0057b9e859c.png"
              alt="appstore-letgetcar"
              style={{ width: "200px", objectFit: "cover" }}
            />
            <img
              src="https://media-ae.cars24.com/production/consumer-web-ae/240904190339/js/5981044807b05fdc3f15bf5424831877.png"
              alt="appstore-letgetcar"
              style={{ width: "200px", objectFit: "cover" }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CtnSection;
