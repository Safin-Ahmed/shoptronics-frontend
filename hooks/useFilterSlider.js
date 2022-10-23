import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFilterSlider = (min, max) => {
  const [value, setValue] = useState([min, max]);
  const router = useRouter();
  const handleChange = (e, newValue) => {
    setValue(newValue);
    router.push({
      query: {
        ...router.query,
        filter_price: newValue.toString().replaceAll(",", "-"),
      },
    });
  };

  useEffect(() => {
    const options = router?.asPath
      ?.split("?")[1]
      ?.split("&")
      ?.find((item) => item.includes("filter_price"))
      ?.split("=");

    const values = options?.[1]?.split("-");

    if (values?.length > 0) {
      setValue(values);
    }
  }, []);

  return {
    value,
    handleChange,
  };
};

export default useFilterSlider;
