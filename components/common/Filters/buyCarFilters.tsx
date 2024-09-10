"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NormalText } from "@/components/UI";
import { Checkbox, RangeSlider } from "flowbite-react";
import buyCarServices from "@/services/buycarService";

interface BuyCarFiltersProps {
  budgetRange: [number, number];
  emiRange: [number, number];
  setApiParameters: (arg: string) => void;
}

const BuyCarFilters: React.FC<BuyCarFiltersProps> = ({
  budgetRange,
  emiRange,
  setApiParameters,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filterHostingData, setFilterHostingData] = useState({});
  const [filters, setFilters] = useState({
    types: [] as string[],
    brand_id: [] as string[],
    body_type_id: [] as string[],
    category_id: [] as string[],
    sale_price: 350000,
    emi_price: 7000,
    on_discount: false,
    zero_down_payment_avilable: false,
    year: 2025,
    mileage: 208000,
    fuel_type: [] as string[],
    is_low_imperfection: false,
    option: [] as string[],
    drive_type: [] as string[],
    engine_size: 6,
    number_cylinders: 8,
    transmission: [] as string[],
    no_of_doors: [] as string[],
    no_seats: [] as string[],
    is_new_car: [] as string[],
    is_recommended_car: "0",
    is_luxury_car: "0",
    is_letget_car_trusted: "0",
    is_new_arrival: "0",
    name: "" as string,
  });

  useEffect(() => {
    fetchAllFilterDatas();
  }, []);

  const fetchAllFilterDatas = async () => {
    const allDatas = await Promise.all([
      buyCarServices.getBrands(),
      buyCarServices.getBodyTypes(),
      buyCarServices.getCategories(),
    ]);
    setFilterHostingData({
      brands: allDatas[0].data,
      bodyTypes: allDatas[1].data,
      categories: allDatas[2].data,
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const typesParam = params.get("types");
    const brandsParam = params.get("brand_id");
    const bodyTypeParam = params.get("body_type_id");
    const categoryParam = params.get("category_id");
    const budgetParam = params.get("sale_price");
    const emiParam = params.get("emi_price");
    const onDiscountParam = params.get("on_discount");
    const zeroDownPaymentAvailableParam = params.get(
      "zero_down_payment_avilable"
    );
    const yearParam = params.get("year");
    const mileageParam = params.get("mileage");
    const fuelTypeParam = params.get("fuel_type");
    const isLowImperfectParam = params.get("is_low_imperfection");
    const optionParam = params.get("option");
    const driveTypeParam = params.get("drive_type");
    const engineSizeParam = params.get("engine_size");
    const numberCylindersParam = params.get("number_cylinders");
    const transmissionParam = params.get("transmission");
    const noOfDoorsParam = params.get("no_of_doors");
    const newCarsParam = params.get("is_new_car");
    const noSeatsParam = params.get("no_seats");
    const isRecommentedCarParam = params.get("is_recommended_car");
    const isLuxuaryCarParam = params.get("is_luxury_car");
    const isLetGetCarTrustedParam = params.get("is_letget_car_trusted");
    const isNewArrivalParam = params.get("is_new_arrival");
    const nameParam = params.get("name");

    setFilters((prevFilters) => ({
      ...prevFilters,
      types: typesParam ? typesParam.split(",") : [],
      brand_id: brandsParam ? brandsParam.split(",") : [],
      body_type_id: bodyTypeParam ? bodyTypeParam.split(",") : [],
      category_id: categoryParam ? categoryParam.split(",") : [],
      sale_price: budgetParam ? Number(budgetParam) : budgetRange[1],
      emi_price: emiParam ? Number(emiParam) : emiRange[1],
      on_discount: onDiscountParam === "true",
      zero_down_payment_avilable: zeroDownPaymentAvailableParam === "true",
      year: yearParam ? Number(yearParam) : 2025,
      mileage: mileageParam ? Number(mileageParam) : 208000,
      fuel_type: fuelTypeParam ? fuelTypeParam.split(",") : [],
      is_low_imperfection: isLowImperfectParam === "true",
      option: optionParam ? optionParam.split(",") : [],
      drive_type: driveTypeParam ? driveTypeParam.split(",") : [],
      engine_size: engineSizeParam ? Number(engineSizeParam) : 6,
      number_cylinders: numberCylindersParam ? Number(numberCylindersParam) : 8,
      transmission: transmissionParam ? transmissionParam.split(",") : [],
      no_of_doors: noOfDoorsParam ? noOfDoorsParam.split(",") : [],
      is_new_car: newCarsParam ? newCarsParam.split(",") : [],
      no_seats: noSeatsParam ? noSeatsParam.split(",") : [],
      is_recommended_car: isRecommentedCarParam || "0",
      is_luxury_car: isLuxuaryCarParam || "0",
      is_letget_car_trusted: isLetGetCarTrustedParam || "0",
      is_new_arrival: isNewArrivalParam || "0",
      name: nameParam || "",
    }));
  }, [searchParams]);

  const updateQueryParams = useCallback(() => {
    const params = new URLSearchParams();

    if (filters.types.length > 0) params.set("types", filters.types.join(","));
    if (filters.brand_id.length > 0)
      params.set("brand_id", filters.brand_id.join(","));
    if (filters.body_type_id.length > 0)
      params.set("body_type_id", filters.body_type_id.join(","));
    if (filters.category_id.length > 0)
      params.set("category_id", filters.category_id.join(","));
    if (filters.sale_price !== budgetRange[1])
      params.set("sale_price", filters.sale_price.toString());
    if (filters.emi_price !== emiRange[1])
      params.set("emi_price", filters.emi_price.toString());
    if (filters.on_discount) params.set("on_discount", "true");
    if (filters.zero_down_payment_avilable)
      params.set("zero_down_payment_avilable", "true");
    if (filters.year !== 2025) params.set("year", filters.year.toString());
    if (filters.mileage !== 208000)
      params.set("mileage", filters.mileage.toString());
    if (filters.fuel_type.length > 0)
      params.set("fuel_type", filters.fuel_type.join(","));
    if (filters.is_low_imperfection) params.set("is_low_imperfection", "true");
    if (filters.option.length > 0)
      params.set("option", filters.option.join(","));
    if (filters.drive_type.length > 0)
      params.set("drive_type", filters.drive_type.join(","));
    if (filters.engine_size !== 6)
      params.set("engine_size", filters.engine_size.toString());
    if (filters.number_cylinders !== 8)
      params.set("number_cylinders", filters.number_cylinders.toString());
    if (filters.transmission.length > 0)
      params.set("transmission", filters.transmission.join(","));
    if (filters.no_of_doors.length > 0)
      params.set("no_of_doors", filters.no_of_doors.join(","));
    if (filters.is_new_car.length > 0)
      params.set("is_new_car", filters.is_new_car.join(","));
    if (filters.no_seats.length > 0)
      params.set("no_seats", filters.no_seats.join(","));
    if (filters.is_recommended_car !== "0")
      params.set("is_recommended_car", filters.is_recommended_car);
    if (filters.is_luxury_car !== "0")
      params.set("is_luxury_car", filters.is_luxury_car);
    if (filters.is_letget_car_trusted !== "0")
      params.set("is_letget_car_trusted", filters.is_letget_car_trusted);
    if (filters.is_new_arrival !== "0")
      params.set("is_new_arrival", filters.is_new_arrival);
    if (filters.name !== "") params.set("name", filters.name);

    fetchFilteredData(params.toString());

    router.replace(`?${params.toString()}`);
  }, [filters, budgetRange, emiRange, router]);

  const fetchFilteredData = (queryParams: string) => {
    setApiParameters(queryParams);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      updateQueryParams();
    }, 1000); // 1 second debounce

    return () => {
      clearTimeout(handler);
    };
  }, [filters, updateQueryParams]);

  const handleCheckboxChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item: string) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const handleRangeChange = (filterType: string, value: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <div className="h-screen overflow-auto fixed top-[130px] min-w-[270px] bg-white z-2 pb-32">
      {JSON.stringify(filterHostingData) === "{}" ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          {/* <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-lg font-bold mb-4">Type</h2>
            {types.map((type) => (
              <label key={type} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.types.includes(type)}
                  onChange={() => handleCheckboxChange("types", type)}
                  className="mr-2"
                  color="yellow"
                />
                <NormalText text={type} size="sm" />
              </label>
            ))}
          </div> */}

          {/* Type */}

          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-lg font-bold mb-4">Type</h2>
            {["1", "0"].map((newCar) => (
              <label key={newCar} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.is_new_car.includes(newCar)}
                  onChange={() => handleCheckboxChange("is_new_car", newCar)}
                  className="mr-2"
                  color="yellow"
                />
                <NormalText
                  text={newCar === "1" ? "Buy New Car" : "Buy Old Car"}
                  size="sm"
                />
              </label>
            ))}
            <label className="flex items-center mb-2">
              <Checkbox
                checked={filters.is_recommended_car === "1" ? true : false}
                onChange={(val) => {
                  console.log(val.target.checked, "heyy");
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    is_recommended_car: val.target.checked ? "1" : "0",
                    // prevFilters.is_recommended_car === "1" ? "0" : "1",
                  }));
                }}
                className="mr-2"
                color="yellow"
              />
              <NormalText text="Recommented Cars" size="sm" />
            </label>
            <label className="flex items-center mb-2">
              <Checkbox
                checked={filters.is_luxury_car === "1" ? true : false}
                onChange={(val) => {
                  console.log(val.target.checked, "heyy");
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    is_luxury_car: val.target.checked ? "1" : "0",
                  }));
                }}
                className="mr-2"
                color="yellow"
              />
              <NormalText text="Luxuary Cars" size="sm" />
            </label>
            <label className="flex items-center mb-2">
              <Checkbox
                checked={filters.is_letget_car_trusted === "1" ? true : false}
                onChange={(val) => {
                  console.log(val.target.checked, "heyy");
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    is_letget_car_trusted: val.target.checked ? "1" : "0",
                  }));
                }}
                className="mr-2"
                color="yellow"
              />
              <NormalText text="LetGetCar Trusted" size="sm" />
            </label>
            <label className="flex items-center mb-2">
              <Checkbox
                checked={filters.is_new_arrival === "1" ? true : false}
                onChange={(val) => {
                  console.log(val.target.checked, "heyy");
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    is_new_arrival: val.target.checked ? "1" : "0",
                  }));
                }}
                className="mr-2"
                color="yellow"
              />
              <NormalText text="New Arrivals" size="sm" />
            </label>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg mb-4 max-h-96 overflow-y-scroll">
            <h2 className="text-lg font-bold mt-4 mb-4">Brands</h2>
            {filterHostingData?.brands?.map((brand) => (
              <label key={brand.id} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.brand_id.includes(brand.id.toString())}
                  onChange={() =>
                    handleCheckboxChange("brand_id", brand.id.toString())
                  }
                  className="mr-2"
                  color="yellow"
                />
                <NormalText text={brand.name} size="sm" />
              </label>
            ))}
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg mb-4 max-h-96 overflow-y-scroll">
            <h2 className="text-lg font-bold mt-4 mb-4">Body types</h2>
            {filterHostingData?.bodyTypes?.map((bodyType) => (
              <label key={bodyType.id} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.body_type_id.includes(
                    bodyType.id.toString()
                  )}
                  onChange={() =>
                    handleCheckboxChange("body_type_id", bodyType.id.toString())
                  }
                  className="mr-2"
                  color="yellow"
                />
                <NormalText text={bodyType.name} size="sm" />
              </label>
            ))}
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg mb-4 max-h-96 overflow-y-scroll">
            <h2 className="text-lg font-bold mt-4 mb-4">Categories</h2>
            {filterHostingData?.categories?.map((category) => (
              <label key={category.id} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.category_id.includes(category.id.toString())}
                  onChange={() =>
                    handleCheckboxChange("category_id", category.id.toString())
                  }
                  className="mr-2"
                  color="yellow"
                />
                <NormalText text={category.name} size="sm" />
              </label>
            ))}
          </div>

          {/* Budget Slider */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Budget</h2>
              <span className="text-gray-600">
                AED {filters.sale_price.toLocaleString()}
              </span>
            </div>
            <RangeSlider
              min={budgetRange[0]}
              max={budgetRange[1]}
              value={filters.sale_price}
              onChange={(e) =>
                handleRangeChange("sale_price", Number(e.target.value))
              }
              color="yellow"
            />
          </div>

          {/* EMI Slider */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">EMI</h2>
              <span className="text-gray-600">
                AED {filters.emi_price.toLocaleString()}
              </span>
            </div>
            <RangeSlider
              min={emiRange[0]}
              max={emiRange[1]}
              value={filters.emi_price}
              onChange={(e) =>
                handleRangeChange("emi_price", Number(e.target.value))
              }
              color="yellow"
            />
          </div>

          {/* Year Slider */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Year</h2>
              <span className="text-gray-600">{filters.year}</span>
            </div>
            <RangeSlider
              min={2013}
              max={2025}
              value={filters.year}
              onChange={(e) =>
                handleRangeChange("year", Number(e.target.value))
              }
              color="yellow"
            />
          </div>

          {/* Mileage Slider */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Mileage</h2>
              <span className="text-gray-600">
                {filters.mileage.toLocaleString()} km
              </span>
            </div>
            <RangeSlider
              min={0}
              max={208000}
              value={filters.mileage}
              onChange={(e) =>
                handleRangeChange("mileage", Number(e.target.value))
              }
              color="yellow"
            />
          </div>

          {/* Fuel Type Checkboxes */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-lg font-bold mb-4">Fuel Type</h2>
            {["petrol", "diesel"].map((fuel) => (
              <label key={fuel} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.fuel_type.includes(fuel)}
                  onChange={() => handleCheckboxChange("fuel_type", fuel)}
                  className="mr-2"
                  color="yellow"
                />
                <NormalText
                  text={fuel.charAt(0).toUpperCase() + fuel.slice(1)}
                  size="sm"
                />
              </label>
            ))}
          </div>

          {/* Zero Down Payment Checkbox */}
          {/* <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <label className="flex items-center mb-2">
              <Checkbox
                checked={filters.zero_down_payment_avilable}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    zero_down_payment_avilable:
                      !prevFilters.zero_down_payment_avilable,
                  }))
                }
                className="mr-2"
                color="yellow"
              />
              <NormalText text="Zero Down Payment Available" size="sm" />
            </label>
          </div> */}

          {/* On Discount */}
          {/* <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <label className="flex items-center mb-2">
              <Checkbox
                checked={filters.on_discount}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    on_discount: !prevFilters.on_discount,
                  }))
                }
                className="mr-2"
                color="yellow"
              />
              <NormalText text="On Discount" size="sm" />
            </label>
          </div> */}

          {/* Low Imperfection Checkbox */}
          {/* <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <label className="flex items-center mb-2">
              <Checkbox
                checked={filters.is_low_imperfection}
                onChange={() =>
                  setFilters((prevFilters) => ({
                    ...prevFilters,
                    is_low_imperfection: !prevFilters.is_low_imperfection,
                  }))
                }
                className="mr-2"
                color="yellow"
              />
              <NormalText text="Low Imperfection" size="sm" />
            </label>
          </div> */}

          {/* Option Checkboxes */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-lg font-bold mb-4">Options</h2>
            {["Basic", "Semi Loaded", "Fully Loaded"].map((option) => (
              <label key={option} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.option.includes(option)}
                  onChange={() => handleCheckboxChange("option", option)}
                  className="mr-2"
                  color="yellow"
                />
                <NormalText text={option} size="sm" />
              </label>
            ))}
          </div>

          {/* Drive Type Checkboxes */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-lg font-bold mb-4">Drive Type</h2>
            {[
              "Front Wheel Drive",
              "Four Wheel Drive",
              "All Wheel Drive",
              "Rear Wheel Drive",
            ].map((drive) => (
              <label key={drive} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.drive_type.includes(drive)}
                  onChange={() => handleCheckboxChange("drive_type", drive)}
                  className="mr-2"
                  color="yellow"
                />
                <NormalText text={drive} size="sm" />
              </label>
            ))}
          </div>

          {/* Engine Size Slider */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Engine Size</h2>
              <span className="text-gray-600">{filters.engine_size}</span>
            </div>
            <RangeSlider
              min={1}
              max={6}
              value={filters.engine_size}
              onChange={(e) =>
                handleRangeChange("engine_size", Number(e.target.value))
              }
              color="yellow"
            />
          </div>

          {/* Number of Cylinders Slider */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Number of Cylinders</h2>
              <span className="text-gray-600">{filters.number_cylinders}</span>
            </div>
            <RangeSlider
              min={1}
              max={8}
              value={filters.number_cylinders}
              onChange={(e) =>
                handleRangeChange("number_cylinders", Number(e.target.value))
              }
              color="yellow"
            />
          </div>

          {/* Transmission Checkboxes */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-lg font-bold mb-4">Transmission</h2>
            {["Automatic", "Manual"].map((transmission) => (
              <label key={transmission} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.transmission.includes(transmission)}
                  onChange={() =>
                    handleCheckboxChange("transmission", transmission)
                  }
                  className="mr-2"
                  color="yellow"
                />
                <NormalText text={transmission} size="sm" />
              </label>
            ))}
          </div>

          {/* Number of Doors Checkboxes */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-lg font-bold mb-4">Number of Doors</h2>
            {["2", "3", "4", "5"].map((doors) => (
              <label key={doors} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.no_of_doors.includes(doors)}
                  onChange={() => handleCheckboxChange("no_of_doors", doors)}
                  className="mr-2"
                  color="yellow"
                />
                <NormalText text={doors} size="sm" />
              </label>
            ))}
          </div>

          {/* Number of Seats Checkboxes */}
          <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-lg font-bold mb-4">Number of Seats</h2>
            {["2", "3", "4", "5", "7", "8"].map((seats) => (
              <label key={seats} className="flex items-center mb-2">
                <Checkbox
                  checked={filters.no_seats.includes(seats)}
                  onChange={() => handleCheckboxChange("no_seats", seats)}
                  className="mr-2"
                  color="yellow"
                />
                <NormalText text={seats} size="sm" />
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyCarFilters;
