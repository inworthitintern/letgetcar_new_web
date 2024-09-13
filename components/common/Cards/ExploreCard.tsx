import { Heading } from "@/components/UI";
import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";

const ExploreCard = ({
  Icon,
  path,
  text,
  iconH = 100,
  iconW = 100,
  className,
}: any) => {
  return (
    <Link href={path}>
      <div className="relative h-52 flex-col max-w-sm p-6 rounded-lg shadow bg-primary hover:bg-primary-text transition-all flex items-center justify-center">
        <div className={`absolute ${className}`}>
          <Icon height={iconH} width={iconW} />
        </div>
        <div className={`mt-28`}>
          <Heading text={text} textAlign="center" type="h4" />
        </div>
      </div>
    </Link>
  );
};

export default ExploreCard;
