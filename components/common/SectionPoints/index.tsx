import { Heading } from "@/components/UI";
import React from "react";
import Spacer from "../Spacer";
import { List } from "flowbite-react";

interface ISectionPoints {
  title: string;
  lists: string[];
}

const SectionPoints: React.FC<ISectionPoints> = ({ title, lists }) => {
  return (
    <>
      <Heading text={title} type="h4" textAlign="left" />
      <Spacer spacing="sm" />
      <List>
        {lists.map((list) => (
          <List.Item>{list}</List.Item>
        ))}
      </List>
    </>
  );
};

export default SectionPoints;
