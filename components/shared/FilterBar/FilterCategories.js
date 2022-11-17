import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { categoryQuery } from "../../../lib/queries";
import FilterHeading from "../../UI/FilterHeading";
import FilterCollapse from "./FilterCollapse/FilterCollapse";

const FilterCategories = () => {
  const { data, loading, error } = useQuery(categoryQuery);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return null;
  }

  const categories = data.categories.data;
  return (
    <>
      <FilterHeading title={"Categories"} />
      {categories.map((item) => {
        const {
          id,
          attributes: { name, sub_categories },
        } = item;
        const options = sub_categories.data.reduce((acc, cur) => {
          return (acc = [...acc, cur.attributes.Name]);
        }, []);
        return <FilterCollapse key={item.id} title={name} options={options} />;
      })}
    </>
  );
};

export default FilterCategories;
