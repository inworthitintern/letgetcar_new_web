import React, { useState, useRef, useEffect } from "react";
import { Modal, Tabs, Card } from "flowbite-react";
import sellCarServices from "@/services/sellcarService";
import { LoadingSpinner } from "@/components/common";
import { toast } from "react-toastify";
import { Button } from "@/components/UI";

interface ISellCarFormModal {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const KMSDRIVEN = [
  "0-20,000 kms",
  "20,000 - 40,000 kms",
  "40,000 - 60,000 kms",
  "60,000 - 90,000 kms",
  "90,000 - 120,000 kms",
  "120,000 - 150,000 kms",
  "150,000 - 180,000 kms",
  "180,000 - 220,000 kms",
  "220,000 - 250,000 kms",
  "250,000 - 300,000 kms",
  "300,000 kms+",
];

const EXPECTED_SALE_CAR = [
  "Within this week",
  "By next week",
  "After 2 weeks",
  "Just checking price",
];

const SellCarFormModal: React.FC<ISellCarFormModal> = ({ open, setOpen }) => {
  const intialValues = {
    brandId: null,
    modelId: null,
    Year: null,
    gcc_specified: false,
    kms_driven: null,
    expected_sell_car: null,
  };

  const [selectedTab, setSelectedTab] = useState("Brand");

  // Refs for each tab to be able to scroll to them
  const tabRefs = {
    Brand: useRef<HTMLDivElement>(null),
    Model: useRef<HTMLDivElement>(null),
    Year: useRef<HTMLDivElement>(null),
    GCC: useRef<HTMLDivElement>(null),
    "Kms Driven": useRef<HTMLDivElement>(null),
    Other: useRef<HTMLDivElement>(null),
  };

  // Scroll tab into view when clicked
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);

    // Scroll the selected tab into the center
    tabRefs[tabName]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const [brands, setBrand] = useState([]);
  const [sellCarModels, setSellCarModels] = useState([]);

  const [selectedValues, setSelectedValues] = useState(intialValues);

  const [showEnquiryBtn, setShowEquiryBtn] = useState(false);
  const [loadingEquiryBtn, setLoadingEquiryBtn] = useState(false);

  const getSellCarBrands = async () => {
    const fetchedBrands = await sellCarServices.getSellCarBrands();
    if (fetchedBrands.data) {
      setBrand(fetchedBrands.data);
    }
  };

  const getSellCarModelsByBrand = async (brandId: number) => {
    const fetchedSellcarModel = await sellCarServices.getSellCarModels({
      brandId,
    });
    if (fetchedSellcarModel.data) {
      setSellCarModels(fetchedSellcarModel.data);
    }
  };

  const sentSellCarEnquiry = async () => {
    setLoadingEquiryBtn(true);
    const sentEnquiry = await sellCarServices.createSellCarEnquiry(
      selectedValues
    );

    if (sentEnquiry) {
      setOpen(false);
      toast.success(
        "You have Successfully Submitted the Sell Car Enquiry. We Will Contact You Soon"
      );
    }

    setLoadingEquiryBtn(false);
  };

  useEffect(() => {
    getSellCarBrands();
  }, []);

  return (
    <>
      {/* Modal */}
      <Modal show={open} onClose={() => setOpen(false)} size="xxl">
        <Modal.Header>Sell Your Car</Modal.Header>
        {brands?.length ? (
          <>
            <Modal.Body>
              <div className="p-4">
                {/* Tabs */}
                <div className="overflow-auto flex-nowrap flex">
                  <div
                    ref={tabRefs.Brand}
                    className={`min-w-[100px] cursor-pointer ${
                      selectedTab === "Brand"
                        ? " text-primary-text font-bold"
                        : "text-gray"
                    }`}
                    onClick={() => handleTabClick("Brand")}
                  >
                    Brand
                  </div>
                  <div
                    ref={tabRefs.Model}
                    className={`min-w-[100px] cursor-pointer ${
                      selectedTab === "Model"
                        ? " text-primary-text font-bold"
                        : "text-gray"
                    }`}
                    onClick={() => {
                      selectedValues.brandId
                        ? handleTabClick("Model")
                        : toast.warn("Please Select Brand");
                    }}
                  >
                    Model
                  </div>
                  <div
                    ref={tabRefs.Year}
                    className={`min-w-[100px] cursor-pointer ${
                      selectedTab === "Year"
                        ? " text-primary-text font-bold"
                        : "text-gray"
                    }`}
                    onClick={() => {
                      selectedValues.brandId && selectedValues.modelId
                        ? handleTabClick("Year")
                        : toast.warn("Please Select Previous Steps");
                    }}
                  >
                    Year
                  </div>
                  <div
                    ref={tabRefs.GCC}
                    className={`min-w-[100px] cursor-pointer ${
                      selectedTab === "GCC"
                        ? " text-primary-text font-bold"
                        : "text-gray"
                    }`}
                    onClick={() => {
                      selectedValues.brandId &&
                      selectedValues.modelId &&
                      selectedValues.Year
                        ? handleTabClick("GCC")
                        : toast.warn("Please Select Previous Steps");
                    }}
                  >
                    GCC
                  </div>
                  <div
                    ref={tabRefs["Kms Driven"]}
                    className={`min-w-[120px] cursor-pointer ${
                      selectedTab === "Kms Driven"
                        ? " text-primary-text font-bold"
                        : "text-gray"
                    }`}
                    onClick={() => {
                      selectedValues.brandId &&
                      selectedValues.modelId &&
                      selectedValues.Year &&
                      selectedValues.gcc_specified
                        ? handleTabClick("Kms Driven")
                        : toast.warn("Please Select Previous Steps");
                    }}
                  >
                    Kms Driven
                  </div>
                  <div
                    ref={tabRefs.Other}
                    className={`min-w-[100px] cursor-pointer ${
                      selectedTab === "Other"
                        ? " text-primary-text font-bold"
                        : "text-gray"
                    }`}
                    onClick={() => {
                      selectedValues.brandId &&
                      selectedValues.modelId &&
                      selectedValues.Year &&
                      selectedValues.gcc_specified &&
                      selectedValues.kms_driven
                        ? handleTabClick("Other")
                        : toast.warn("Please Select Previous Steps");
                    }}
                  >
                    Other
                  </div>
                </div>

                <hr className="mt-4" />

                {/* Dynamic Tab Content */}
                {selectedTab === "Brand" ? (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-2">
                      Select your car brand
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Please Select Your selling Car Brand
                    </p>

                    {/* Search Car Brand Input */}
                    <div className="mt-4">
                      <input
                        type="text"
                        placeholder="Search for your car’s brand"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    {/* Full Car Brand List */}
                    <ul className="mt-4 max-h-40 overflow-y-auto">
                      {brands.map((brand) => (
                        <li
                          key={brand.name}
                          className={`p-2 border-b border-gray-200 flex items-center hover:bg-primary cursor-pointer ${
                            brand.id === selectedValues.brandId
                              ? "bg-primary"
                              : ""
                          }`}
                          onClick={() => {
                            setSelectedValues((prev) => ({
                              ...prev,
                              brandId: brand.id,
                            }));
                            setSelectedTab("Model");
                            getSellCarModelsByBrand(brand.id);
                          }}
                        >
                          <img
                            src={brand.image}
                            style={{ width: "20px", height: "20px" }}
                            className="mr-4"
                          />
                          {brand.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : selectedTab === "Model" ? (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-2">
                      Select your car Model
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Please Select Your selling Car model
                    </p>

                    {/* Full Car Brand List */}
                    <ul className="mt-4 max-h-40 overflow-y-auto">
                      {sellCarModels.map((model) => (
                        <li
                          key={model.name}
                          className={`p-2 border-b border-gray-200 flex items-center hover:bg-primary cursor-pointer ${
                            model.id === selectedValues.modelId
                              ? "bg-primary"
                              : ""
                          }`}
                          onClick={() => {
                            setSelectedValues((prev) => ({
                              ...prev,
                              modelId: model.id,
                            }));
                            setSelectedTab("Year");
                          }}
                        >
                          {model.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : selectedTab === "Year" ? (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-2">
                      Select your car Year
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Please Select Your selling Car Year
                    </p>

                    {/* Full Car Brand List */}
                    <ul className="mt-4 max-h-40 overflow-y-auto">
                      {Array.from(
                        { length: 2024 - 2010 + 1 },
                        (_, i) => 2010 + i
                      ).map((year) => (
                        <li
                          key={year}
                          className={`p-2 border-b border-gray-200 flex items-center hover:bg-primary cursor-pointer ${
                            year === selectedValues.Year ? "bg-primary" : ""
                          }`}
                          onClick={() => {
                            setSelectedValues((prev) => ({
                              ...prev,
                              Year: year,
                            }));

                            setSelectedTab("GCC");
                          }}
                        >
                          {year}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : selectedTab === "GCC" ? (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-2">
                      Is your Car as per GCC specifications?
                    </h3>
                    <div className="flex gap-6 mt-4 flex-wrap">
                      <Card
                        className={`${
                          selectedValues.gcc_specified === true
                            ? "bg-primary"
                            : ""
                        } cursor-pointer`}
                        onClick={() => {
                          setSelectedValues((prev) => ({
                            ...prev,
                            gcc_specified: true,
                          }));
                          setSelectedTab("Kms Driven");
                        }}
                      >
                        Yes
                      </Card>
                      <Card
                        className={`${
                          selectedValues.gcc_specified === false
                            ? "bg-primary"
                            : ""
                        } cursor-pointer`}
                        onClick={() => {
                          setSelectedValues((prev) => ({
                            ...prev,
                            gcc_specified: false,
                          }));
                          setSelectedTab("Kms Driven");
                        }}
                      >
                        No
                      </Card>
                    </div>
                  </div>
                ) : selectedTab === "Kms Driven" ? (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-2">
                      What's the odometer reading of the car?
                    </h3>
                    <div className="flex gap-6 mt-4 flex-wrap">
                      {KMSDRIVEN.map((km) => (
                        <Card
                          className={`${
                            selectedValues.kms_driven === km ? "bg-primary" : ""
                          } cursor-pointer`}
                          onClick={() => {
                            setSelectedValues((prev) => ({
                              ...prev,
                              kms_driven: km,
                            }));
                            setSelectedTab("Other");
                          }}
                        >
                          {km}
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  selectedTab === "Other" && (
                    <div className="mt-8">
                      <h3 className="text-lg font-bold mb-2">
                        When are you planning to sell your car?
                      </h3>
                      <div className="flex gap-6 mt-4 flex-wrap">
                        {EXPECTED_SALE_CAR.map((expected) => (
                          <Card
                            className={`${
                              selectedValues.expected_sell_car === expected
                                ? "bg-primary"
                                : ""
                            } cursor-pointer`}
                            onClick={() => {
                              setSelectedValues((prev) => ({
                                ...prev,
                                expected_sell_car: expected,
                              }));
                              setShowEquiryBtn("Other");
                            }}
                          >
                            {expected}
                          </Card>
                        ))}
                      </div>
                    </div>
                  )
                )}

                {/* */}
              </div>
            </Modal.Body>
            <Modal.Footer>
              {showEnquiryBtn && (
                <div className="flex justify-end w-full">
                  <Button
                    text="Sent SellCar Enquiry"
                    type="primary"
                    disabled={loadingEquiryBtn}
                    onClick={sentSellCarEnquiry}
                  />
                </div>
              )}
            </Modal.Footer>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </Modal>
    </>
  );
};

export default SellCarFormModal;

{
  /* Car Brands Grid */
}
{
  /* <div className="grid grid-cols-2 sm:grid-cols-10 gap-4">
                      {brands.map((brand) => (
                        <div
                          key={brand.name}
                          className="flex flex-col items-center p-2 bg-gray-100 rounded-lg"
                        >
                          <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-12 h-12"
                          />
                          <p className="mt-2 text-center text-sm font-semibold">
                            {brand.name}
                          </p>
                        </div>
                      ))}
                    </div> */
}
