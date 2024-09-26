"use client";

import { Container, Section } from "@/components/common";
import { Heading } from "@/components/UI";
import policyServices from "@/services/policyService";
import React, { useEffect, useState } from "react";

interface IPoliciesWrapper {
  policyType: string;
}

const PoliciesWrapper: React.FC<IPoliciesWrapper> = ({ policyType }) => {
  const [policy, setPolicy] = useState<null | string | any>(null);

  useEffect(() => {
    getPolicies();
  }, []);

  const getPolicies = async () => {
    let policies = await policyServices.getPolicies();

    if (policies) {
      setPolicy(policies[policyType]);
    }
  };

  console.log(policy, "yooooo");

  return (
    <Section className="mt-10">
      <Container>
        {<div dangerouslySetInnerHTML={{ __html: policy }}></div>}
      </Container>
    </Section>
  );
};

export default PoliciesWrapper;

// HC3)n~EI-@JQ
// hashitso_lgc
