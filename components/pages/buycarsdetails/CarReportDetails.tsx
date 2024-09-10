"use client";

import { NormalText } from "@/components/UI";
import { Card, Modal } from "flowbite-react";
import React from "react";

// Define the structure for child conditions
interface Condition {
  label: string;
  status: string;
}

// Define the structure for grouped conditions
interface GroupedConditions {
  [parent: string]: Condition[];
}
interface ICarReportDetails {
  openCarReport: boolean;
  setOpenCarReport: (arg: boolean) => void;
  carReports: Record<string, string>;
  carName: string;
}

const CarReportDetails: React.FC<ICarReportDetails> = ({
  openCarReport,
  setOpenCarReport,
  carReports,
  carName,
}) => {
  // Step 1: Group conditions by parent categories
  // Step 2: Group conditions by parent categories
  const groupedConditions: GroupedConditions = Object.entries(
    carReports
  ).reduce((acc: GroupedConditions, [key, status]: [string, string]) => {
    const [parent, child] = key.split(".");
    if (!acc[parent]) {
      acc[parent] = [];
    }
    acc[parent].push({ label: child, status });
    return acc;
  }, {});

  return (
    <>
      <Modal
        show={openCarReport}
        onClose={() => setOpenCarReport(false)}
        color="dark"
        size={"xxxl"}
        className="h-screen p-0"
      >
        <Modal.Header className="bg-primary">
          Detailes Inspection Report for {carName}
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(groupedConditions).map(([parent, children]) => (
              <Card
                key={parent}
                className="features-card flex flex-col justify-start"
              >
                {/* Display parent category */}
                <NormalText
                  text={parent}
                  size="md"
                  color="dark"
                  fontWeight="bold"
                />
                {/* Display child conditions */}
                {children.map(({ label, status }, index) => (
                  <div key={index} className="flex justify-between py-1">
                    <NormalText text={label} size="sm" color="gray" />
                    <NormalText
                      text={status}
                      size="sm"
                      fontWeight="bold"
                      color={status === "passed" ? "success" : "danger"}
                    />
                  </div>
                ))}
              </Card>
            ))}
          </div>
          {/* <div className="grid grid-cols-3 gap-6">
            <Card className="features-card">
              <NormalText
                text="Wiper"
                size="md"
                color="dark"
                fontWeight="bold"
              />
              <div className="flex justify-between py-1">
                <NormalText text="Wiper" size="sm" color="gray" />
                <NormalText
                  text="Passed"
                  size="sm"
                  fontWeight="bold"
                  color="success"
                />
              </div>
              <div className="flex justify-between py-1">
                <NormalText text="Wiper" size="sm" color="gray" />
                <NormalText
                  text="Imperfection"
                  size="sm"
                  fontWeight="bold"
                  color="danger"
                />
              </div>
              <div className="flex justify-between py-1">
                <NormalText text="Wiper" size="sm" color="gray" />
                <NormalText
                  text="Passed"
                  size="sm"
                  fontWeight="bold"
                  color="success"
                />
              </div>
              <div className="flex justify-between py-1">
                <NormalText text="Wiper" size="sm" color="gray" />
                <NormalText
                  text="Passed"
                  size="sm"
                  fontWeight="bold"
                  color="success"
                />
              </div>
              <div className="flex justify-between py-1">
                <NormalText text="Wiper" size="sm" color="gray" />
                <NormalText
                  text="Passed"
                  size="sm"
                  fontWeight="bold"
                  color="success"
                />
              </div>
            </Card>
            <Card className="features-card bg-gray-5">
              <NormalText text="Panoramic Roof" />
              <NormalText
                text="This car has a panoramic roof"
                size="sm"
                color="gray"
              />
            </Card>
            <Card className="features-card bg-gray-5">
              <NormalText text="Panoramic Roof" />
              <NormalText
                text="This car has a panoramic roof"
                size="sm"
                color="gray"
              />
            </Card>
            <Card className="features-card">
              <NormalText text="Panoramic Roof" />
              <NormalText
                text="This car has a panoramic roof"
                size="sm"
                color="gray"
              />
            </Card>
          </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CarReportDetails;
