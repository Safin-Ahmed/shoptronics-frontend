import { useRouter } from "next/router";
import { useState } from "react";

const useFilterSlider = (min, max) => {
  const [value, setValue] = useState([min, max]);
  const router = useRouter();
  const handleChange = (e, newValue) => {
    setValue(newValue);
    router.push({
      query: { price: newValue.toString().replaceAll(",", "-") },
    });
  };

  return {
    value,
    handleChange,
  };
};

export default useFilterSlider;
