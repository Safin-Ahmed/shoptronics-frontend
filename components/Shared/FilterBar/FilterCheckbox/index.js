import React from "react";
import FilterHeading from "../../../UI/FilterHeading";
import CheckboxList from "./CheckboxList";
import classes from "./FilterCheckbox.module.css";

const FilterCheckbox = ({ title, options }) => {
  return (
    <div className={classes.wrapper}>
      <FilterHeading title={title} />
      <CheckboxList options={options} />
    </div>
  );
};

export default FilterCheckbox;
