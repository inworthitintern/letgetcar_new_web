import { FinanceIcon } from "@/components/svgs";
import { Heading } from "@/components/UI";
import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";

const ExploreCard = ({ Icon, path, text }: any) => {
  return (
    <Link href={path}>
      <Card className="bg-primary hover:bg-primary-text transition-all flex items-center justify-center">
        <Icon height={100} width={100} />
        <Heading text={text} textAlign="center" type="h4" />
      </Card>
    </Link>
  );
};

export default ExploreCard;
