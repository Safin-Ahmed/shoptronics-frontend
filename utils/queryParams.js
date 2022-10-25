export const convertArrayToQueryParams = (arr) => {
  return arr?.toString();
};

export const convertParamsToArray = (params) => {
  console.log({ params: params?.replaceAll("%2C", ",").split(",") });
  return params?.replaceAll("%2C", ",").split(",");
};
