export const formatString = (str) => {
  if (!str) return;
  if (typeof str === "string") {
    return str.replace(/\s+/g, "-").toLowerCase();
  }
};
