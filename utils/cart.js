export const countTotalItems = (cartState) => {
  return cartState.reduce((acc, cur) => {
    return (acc += cur.quantity);
  }, 0);
};
