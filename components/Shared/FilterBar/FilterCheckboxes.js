import React from "react";
import FilterCheckbox from "./FilterCheckbox";

const FilterCheckboxes = () => {
  return (
    <>
      <FilterCheckbox
        title="Availability"
        options={["In Stock", "Pre Order", "Up Coming"]}
        type="filter_availability"
      />
      <FilterCheckbox
        title="Brand"
        options={["Apple", "Microsoft", "Google", "Samsung"]}
        type="filter_brand"
      />
      <FilterCheckbox
        title="Color Family"
        options={["Red", "Yellow", "Blue", "White", "Black"]}
        type="filter_color"
      />
      <FilterCheckbox
        title={"Rating"}
        options={[5, 4, 3, 2, 1]}
        type="filter_rating"
      />
    </>
  );
};

export default FilterCheckboxes;
