import { PoliciesWrapper } from "@/components/pages/policies";
import React from "react";

// This function returns an array of static params for Next.js to pre-generate pages
export async function generateStaticParams() {
  const types = [
    { policyType: "privacy_policy" },
    { policyType: "return_and_refund" },
    { policyType: "terms_condition" },
    { policyType: "customer_care_policy" },
  ];

  return types; // Return the array directly
}

const PolicyType = ({ params }: any) => {
  const policyType = params.policyType;

  return <PoliciesWrapper policyType={policyType} />;
};

export default PolicyType;
