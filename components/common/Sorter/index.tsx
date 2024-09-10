import { NormalText } from "@/components/UI";
import { SortIcon } from "@/constants/icons";
import { Dropdown } from "flowbite-react";
import React from "react";

interface ISorterProps {
  setSortedValue: (arg: string) => void;
  sortedValue: string;
}

const Sorter: React.FC<ISorterProps> = ({ setSortedValue, sortedValue }) => {
  const setChangedValue = (value: string) => {
    setSortedValue(value);
  };

  return (
    <Dropdown
      label=""
      className="w-48"
      renderTrigger={() => (
        <div className="flex items-center gap-1">
          <SortIcon />
          <NormalText text="Sort By: " />
          <NormalText text={sortedValue} color="primary" fontWeight="bold" />
        </div>
      )}
    >
      <Dropdown.Item onClick={() => setChangedValue("Best-Matches")}>
        Best Matches
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setChangedValue("Recently-Added")}>
        Recently Added
      </Dropdown.Item>
      <Dropdown.Divider />
      <NormalText text="Price" fontWeight="bold" size="sm" className="ml-4" />
      <Dropdown.Item onClick={() => setChangedValue("RecentlyAdded-LowToHigh")}>
        Low To High
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setChangedValue("RecentlyAdded-HighToLow")}>
        High To Low
      </Dropdown.Item>
      <Dropdown.Divider />
      <NormalText
        text="Kilometers Driven"
        fontWeight="bold"
        size="sm"
        className="ml-4"
      />
      <Dropdown.Item
        onClick={() => setChangedValue("KilometersDriven-LowToHigh")}
      >
        Low To High
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => setChangedValue("KilometersDriven-HighToLow")}
      >
        High To Low
      </Dropdown.Item>
      <Dropdown.Divider />
      <NormalText
        text="Car Year"
        fontWeight="bold"
        size="sm"
        className="ml-4"
      />
      <Dropdown.Item onClick={() => setChangedValue("CarYear-LowToHigh")}>
        Low To High
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setChangedValue("CarYear-HighToLow")}>
        High To Low
      </Dropdown.Item>
    </Dropdown>
  );
};

export default Sorter;
