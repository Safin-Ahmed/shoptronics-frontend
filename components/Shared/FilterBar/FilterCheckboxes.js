import React from "react";
import FilterCheckbox from "./FilterCheckbox";

const FilterCheckboxes = () => {
  return (
    <>
      <FilterCheckbox
        title="Availability"
        options={["In Stock", "Pre Order", "Up Coming"]}
      />
      <FilterCheckbox
        title="Brand"
        options={["Apple", "Microsoft", "Google", "Samsung"]}
      />
      <FilterCheckbox
        title="Color Family"
        options={["Red", "Yellow", "Blue", "White", "Black"]}
      />
      <FilterCheckbox
        title={"Rating"}
        options={["5", "4", "3", "2", "1"]}
        type="rating"
      />
    </>
  );
};

export default FilterCheckboxes;
