import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { findAttributesQuery, findVariant, getOptions } from "../lib/queries";
import { buildVariationTitle } from "../utils/variations";

const useVariation = (id, name) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chosenAttributes, setChosenAttributes] = useState({});

  const {
    data: variantAttributes,
    loading: variantAttributesLoading,
    error,
  } = useQuery(findAttributesQuery, {
    variables: {
      id,
    },
  });

  const { data: variantOptions, loading: variantOptionsLoading } =
    useQuery(getOptions);

  const [getVariants, { loading: isVariantLoading, data: variantData }] =
    useLazyQuery(findVariant, {
      variables: {
        productId: id,
        variationTitle: buildVariationTitle(name, chosenAttributes),
      },
    });

  useEffect(() => {
    if (!variantAttributesLoading && !variantOptionsLoading) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [variantAttributesLoading, variantOptionsLoading]);

  useEffect(() => {
    getVariants();
  }, [chosenAttributes, getVariants]);

  const attributesList =
    variantAttributes?.product?.data?.attributes?.attributes?.data.reduce(
      (acc, cur) => {
        acc.push({
          id: cur.id,
          name: cur.attributes.name,
        });

        return acc;
      },
      []
    );
  const optionsList = variantOptions?.attributeterms.data?.reduce(
    (acc, cur) => {
      acc?.push({
        attributeId: cur.attributes.attribute.data.id,
        value: cur.attributes.name,
      });

      return acc;
    },
    []
  );

  const variantSelectOptions = attributesList?.map((attr) => {
    return {
      id: attr.id,
      options: optionsList?.filter((option) => option.attributeId === attr.id),
    };
  });

  const initialSelectState = attributesList?.reduce((acc, cur) => {
    const key = `product-${id}-variant-${cur.id}`;
    const option = optionsList?.find((item) => +item.attributeId === +cur.id);

    acc[key] = option?.value;
    return acc;
  }, {});

  console.log({
    attributesList,
    optionsList,
    variantAttributes,
    variantOptions,
  });

  return {
    attributesList,
    optionsList,
    variantSelectOptions,
    initialSelectState,
    chosenAttributes,
    setChosenAttributes,
    getVariants,
    isVariantLoading,
    variantData,
    isLoading,
  };
};

export default useVariation;
