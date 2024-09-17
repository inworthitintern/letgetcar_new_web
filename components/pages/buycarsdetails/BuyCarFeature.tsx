import { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { CheckIcon } from "@/constants/icons";
import { NormalText } from "@/components/UI";

interface IFeaturesmodal {
  data: [];
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const FeaturesModal: React.FC<IFeaturesmodal> = ({
  data,
  isOpen,
  setIsOpen,
}) => {
  // Grouping features by section
  const groupedFeatures = data.reduce((acc, item) => {
    if (!acc[item.section_title]) {
      acc[item.section_title] = [];
    }
    acc[item.section_title].push(item);
    return acc;
  }, {});

  return (
    <>
      {/* Modal */}
      <Modal show={isOpen} onClose={() => setIsOpen(false)} size="xl">
        <Modal.Header className="text-xl font-semibold">
          Car Features
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {/* Loop through categories */}
            {Object.keys(groupedFeatures).map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-gray-800">{section}</h3>
                <ul className="mt-3 space-y-4">
                  {groupedFeatures[section].map((feature, idx) => (
                    <div className="flex gap-2 items-center">
                      <CheckIcon />
                      <div className="flex flex-col">
                        <NormalText text={feature.name} />
                        <NormalText text={feature.description} color="gray" />
                      </div>
                    </div>

                    // <li key={idx} className="flex items-start space-x-3">
                    //   {/* Feature Icon */}
                    //   <div className="mt-1">
                    //     <svg
                    //       className="h-6 w-6 text-blue-500"
                    //       fill="currentColor"
                    //       viewBox="0 0 20 20"
                    //       xmlns="http://www.w3.org/2000/svg"
                    //     >
                    //       <path d="M10 3a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zm0 14a7 7 0 110-14 7 7 0 010 14zm-1-9h2v2h-2V8zm0 4h2v2h-2v-2z"></path>
                    //     </svg>
                    //   </div>
                    //   {/* Feature Text */}
                    //   <div>
                    //     <h4 className="text-base font-medium text-gray-900">
                    //       {feature.name}
                    //     </h4>
                    //     <p className="text-sm text-gray-600">
                    //       {feature.description}
                    //     </p>
                    //   </div>
                    // </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FeaturesModal;
