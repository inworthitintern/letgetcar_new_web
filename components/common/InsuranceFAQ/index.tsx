import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const InsuranceFAQ = () => {
  return (
    <Accordion collapseAll className="mt-10">
      <AccordionPanel>
        <AccordionTitle>
          What insurance cover options do you offer?
        </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Motor Value – Covers Third Party Liability Motor Smart –
            Comprehensive Cover for Loss or Damage to the Insured Vehicle
            including enhanced protection and Third Party Liability Motor
            Executive – Our highest level of coverage with higher limits and all
            optional covers are bundled within
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>
          I only have a third party liability policy, what will this cover?
        </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            This is the most basic cover and is compulsory as per the UAE law.
            Third-party liability covers you against: Death or bodily injury to
            any third party/person. Damages to third party property arising out
            of the use of your motor vehicle. More importantly, this policy does
            not cover any damage or loss to your own vehicle.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>
          Does my car insurance policy include trailer cover?
        </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Sorry, Trailer Insurance is not offered as a standard within RSA's
            Motor Insurance policy. However, you can contact us on 800 772
            (RSA), so we can review and advise if an extension is possible,
            subject to RSA's terms and conditions.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Do you offer car rental services?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, LetGetCar offers convenient car rental services. You can choose
            from a variety of vehicles for short-term or long-term rentals at
            competitive prices.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>
          I have insurance under my name with RSA. Are others automatically
          covered to drive my vehicle under this insurance?
        </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes! That’s if they’ve had a license for more than one year and are
            above the age of 25 years, they can drive the vehicle with your
            consent so you can take a break!
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>
          Who is considered a Young Driver as per RSA Insurance?
        </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            If you’re below the age of 25, you’re considered as a Young Driver.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};

export default InsuranceFAQ;
