export const buildInitialState = (attributesList, optionsList, productId) => {
  const initialSelectState = attributesList?.reduce((acc, cur) => {
    const key = `product-${productId}-variant-${cur.id}`;
    const option = optionsList?.find((item) => +item.attributeId === +cur.id);

    acc[key] = option?.value;
    return acc;
  }, {});

  return initialSelectState;
};

export const buildVariationTitle = (productName, chosenAttributes) => {
  return `${productName} ${Object.values(chosenAttributes).reduce(
    (acc, cur, i) => {
      return (acc += cur + (i === chosenAttributes.length - 1 ? "" : " "));
    },
    ""
  )}`.trimEnd();
};

export const formatAttributes = (attributes) => {
  return attributes?.attributes?.data?.reduce((acc, cur) => {
    acc.push({
      id: cur.id,
      name: cur.attributes.name,
    });

    return acc;
  }, []);
};

export const formatAttributeTerms = (terms) => {
  console.log({ terms });
  return terms?.attributeterms.data?.reduce((acc, cur) => {
    acc?.push({
      attributeId: cur.attributes.attribute.data.id,
      value: cur.attributes.name,
    });

    return acc;
  }, []);
};

export const buildCheckboxOptions = (attributesList, optionsList) => {
  console.log({ attributesList, optionsList });
  return attributesList?.map((attr) => {
    return {
      id: attr.id,
      name: attr.name,
      options: optionsList
        ?.filter((option) => option.attributeId === attr.id)
        .reduce((acc, cur) => {
          acc.push(cur.value);
          return acc;
        }, []),
    };
  });
};

export const buildAttributesCheckboxOptions = (attributes, options) => {
  const attributesList = formatAttributes(attributes);
  const optionsList = formatAttributeTerms(options);

  const checkboxOptions = buildCheckboxOptions(attributesList, optionsList);

  return checkboxOptions;
};
