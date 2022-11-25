import { useQuery } from "@apollo/client";
import React from "react";
import {
  brandsQuery,
  getAllAttributes,
  getAllAttributesTerms,
} from "../../../lib/queries";
import { formatString } from "../../../utils/string";
import { buildAttributesCheckboxOptions } from "../../../utils/variations";
import FilterCheckbox from "./FilterCheckbox";

const FilterCheckboxes = () => {
  const { data, loading, error } = useQuery(brandsQuery);
  const brandOptions = data?.brands?.data?.reduce((acc, cur) => {
    acc.push(cur.attributes.name);
    return acc;
  }, []);

  const { data: allAttributesData, loading: attributesLoading } =
    useQuery(getAllAttributes);
  const { data: allAttributesTermData, loading: attributesTermLoading } =
    useQuery(getAllAttributesTerms);

  if (attributesLoading || attributesTermLoading || loading) {
    return;
  }
  const attributes = buildAttributesCheckboxOptions(
    allAttributesData,
    allAttributesTermData
  );

  return (
    <>
      <FilterCheckbox
        title="Availability"
        options={["In Stock", "Out of Stock"]}
        type="filter_availability"
      />
      <FilterCheckbox
        title="Brand"
        options={brandOptions}
        type="filter_brand"
      />

      {attributes?.map((item) => (
        <FilterCheckbox
          key={`${item.name} - ${item.id}`}
          title={item.name}
          options={item.options}
          type={`attribute_${formatString(item.name)}`}
        />
      ))}
      <FilterCheckbox
        title={"Rating"}
        options={[5, 4, 3, 2, 1]}
        type="filter_rating"
      />
    </>
  );
};

export default FilterCheckboxes;
