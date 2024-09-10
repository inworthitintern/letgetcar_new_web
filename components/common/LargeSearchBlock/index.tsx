"use client";
import { Button } from "@/components/UI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LargeSearchBlock = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("buynewcar");

  const router = useRouter();

  const onSubmit = () => {
    let queryBuilder = "";

    if (name) {
      queryBuilder += `name=${name}`;
    }

    if (type === "buynewcar") {
      queryBuilder += `is_new_car=1`;
    } else if (type === "buyusedcar") {
      queryBuilder += `is_new_car=0`;
    } else if (type === "buyluxuarycar") {
      queryBuilder += `is_luxury_car=1`;
    }
    if (type || name) {
      router.push(`/buycarslist?${queryBuilder}`);
    } else {
      toast.warn("Please select any inputs");
    }
  };

  return (
    // py-16 px-8
    <div className="md:block hidden max-w-screen-xl mx-auto">
      <div className="bg-white -translate-y-10 relative z-50 shadow-md rounded-lg grid grid-cols-4 gap-4 overflow-hidden">
        <div className="flex items-center justify-between w-100">
          <input
            type="text"
            placeholder="Try Mustang..."
            className="h-24 border-none focus:ring-0 px-8"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="h-[60%] bg-gray-25 w-[1px] ml-4"></div>
        </div>
        <div className="flex items-center justify-between">
          <select
            name="type"
            id="cars"
            className="h-24 border-none focus:ring-0 px-8 w-full"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="buynewcar">Buy New Car</option>
            <option value="buyusedcar">Buy Used Car</option>
            <option value="buyluxuarycar">Buy Luxuary Car</option>
          </select>
          <div className="h-[60%] bg-gray-25 w-[1px] ml-4"></div>
        </div>
        <div className="flex items-center justify-between">
          <select
            name="location"
            id="location"
            className="h-24 border-none focus:ring-0 px-8 w-full"
          >
            <option value="dubai">Dubai, UAE</option>
            {/* <option value="sharjah">Sharjah, UAE</option>
            <option value="Ajman">Ajman, UAE</option> */}
          </select>
          {/* <div className="h-[60%] bg-gray-25 w-[1px] py-4"></div> */}
        </div>
        <div>
          <button
            type="button"
            className="text-dark bg-primary hover:bg-primary-text focus:outline-none w-full h-full text-lg font-semibold"
            onClick={onSubmit}
          >
            Search Car
          </button>

          {/* <Button type="primary" text="Search Car" /> */}
        </div>
      </div>
    </div>
  );
};

export default LargeSearchBlock;
