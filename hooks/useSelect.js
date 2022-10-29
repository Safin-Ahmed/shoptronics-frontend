import { useEffect, useState } from "react";

const useSelect = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const handleChange = (e) => {
    e.preventDefault();
    setState((prev) => e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return {
    state,
    handleChange,
    handleClick,
  };
};

export default useSelect;
