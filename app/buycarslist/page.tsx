import React, { Suspense } from "react";
import { BuyCarListWrapper } from "@/components/pages/BuyCarsList";

const BuyCarList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuyCarListWrapper />
    </Suspense>
  );
};

export default BuyCarList;
