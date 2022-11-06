import { useState } from "react";

export const useShop = ({ products, pagination }) => {
  const [state, setState] = useState({ products, pagination });

  return {
    state,
  };
};
