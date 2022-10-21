import React from "react";
import FilterHeading from "../../UI/FilterHeading";
import FilterCollapse from "./FilterCollapse/FilterCollapse";

const FilterCategories = () => {
  return (
    <>
      <FilterHeading title={"Categories"} />
      <FilterCollapse
        title="Computer"
        options={[
          "Desktop",
          "Laptop",
          "Motherboard",
          "Processor",
          "Ram",
          "Graphics Card",
          "SSD",
        ]}
      />
      <FilterCollapse
        title="Mobile"
        options={["Android", "Ios", "Ipad", "used"]}
      />
      <FilterCollapse
        title="Headphone"
        options={[
          "Earpods",
          "Airpods",
          "Headset",
          "Wired Headphones",
          "Wireless Headphones",
          "Neck Headphones",
        ]}
      />

      <FilterCollapse
        title="Speaker"
        options={[
          "Desktop",
          "Laptop",
          "Motherboard",
          "Processor",
          "Ram",
          "Graphics Card",
          "SSD",
        ]}
      />

      <FilterCollapse
        title="Mouse"
        options={[
          "Desktop",
          "Laptop",
          "Motherboard",
          "Processor",
          "Ram",
          "Graphics Card",
          "SSD",
        ]}
      />

      <FilterCollapse
        title="Keyboard"
        options={[
          "Desktop",
          "Laptop",
          "Motherboard",
          "Processor",
          "Ram",
          "Graphics Card",
          "SSD",
        ]}
      />
    </>
  );
};

export default FilterCategories;
