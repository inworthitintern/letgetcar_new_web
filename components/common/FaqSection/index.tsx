import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const FaqSection = () => {
  return (
    <Accordion collapseAll className="mt-10">
      <AccordionPanel>
        <AccordionTitle>How does LetGetCar help me sell my car?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            LetGetCar provides a hassle-free process to sell your car. Simply
            submit your car’s details, schedule an inspection, and get a
            competitive offer. Once accepted, we handle all the paperwork and
            ensure quick payment.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Can I test drive a car before buying?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, you can! We offer test drives for all our vehicles. You can
            either visit us or schedule a test drive from the comfort of your
            home. Our team will bring the car to you at your preferred time.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>
          What types of cars can I buy from LetGetCar?
        </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            We offer a wide range of both new and used cars. Whether you’re
            looking for budget-friendly used cars or the latest models, we have
            options that suit all preferences and budgets.
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
          How can I book a garage service through LetGetCar?
        </AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Booking a garage service is easy! Just choose your preferred garage,
            select the services you need, and schedule an appointment online.
            We’ll ensure your car gets the best care.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};

export default FaqSection;
