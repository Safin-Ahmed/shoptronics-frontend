export const convertArrayToQueryParams = (arr) => {
  return arr?.toString();
};

export const convertParamsToArray = (params) => {
  return params?.replaceAll("%2C", ",").split(",");
};
