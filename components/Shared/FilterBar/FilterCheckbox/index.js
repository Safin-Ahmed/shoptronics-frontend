import React from "react";
import FilterHeading from "../../../UI/FilterHeading";
import CheckboxList from "./CheckboxList";
import classes from "./FilterCheckbox.module.css";

const FilterCheckbox = ({ title, options, type }) => {
  return (
    <div className={classes.wrapper}>
      <FilterHeading title={title} />
      <CheckboxList options={options} type={type} />
    </div>
  );
};

export default FilterCheckbox;
