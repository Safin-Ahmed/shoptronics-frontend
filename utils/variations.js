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
