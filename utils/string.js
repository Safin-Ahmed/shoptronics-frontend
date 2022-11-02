export const formatString = (str) => {
  if (!str) return;
  if (typeof str === "string") {
    return str.replace(/\s+/g, "-").toLowerCase();
  }
};

export const generateCategoryNames = (categories) => {
  return categories?.map((item, i) => {
    if (i === categories.length - 1) {
      return `${item.attributes.Name || item.attributes.name}`;
    } else {
      return `${item.attributes.Name || item.attributes.name}, `;
    }
  });
};
