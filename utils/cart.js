export const countTotalItems = (cartState) => {
  return cartState.reduce((acc, cur) => {
    return (acc += cur.quantity);
  }, 0);
};

export const totalAndSubtotalCal = (cartState, initial) => {
  return cartState.reduce((acc, cur) => {
    return (acc += cur.discountPrice
      ? cur.discountPrice * cur.quantity
      : cur.price * cur.quantity);
  }, initial);
};
