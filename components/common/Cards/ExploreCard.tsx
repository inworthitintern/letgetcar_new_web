import { FinanceIcon } from "@/components/svgs";
import { Heading } from "@/components/UI";
import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";

const ExploreCard = ({ Icon, path }: any) => {
  return (
    <Link href={path}>
      <Card className="bg-primary hover:bg-primary-text transition-all flex items-center justify-center">
        <Icon height={120} width={120} />
        <Heading text="Finance" type="h4" />
      </Card>
    </Link>
  );
};

export default ExploreCard;
