import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFilterSlider = (sliderValue) => {
  const [value, setValue] = useState([...sliderValue]);
  const router = useRouter();
  const handleChange = (e, newValue) => {
    setValue(newValue);
    router.push(
      {
        query: {
          ...router.query,
          filter_price: newValue.toString().replaceAll(",", "-"),
        },
      },
      undefined,
      { shallow: false }
    );
  };

  useEffect(() => {
    const options = router?.asPath
      ?.split("?")[1]
      ?.split("&")
      ?.find((item) => item.includes("filter_price"))
      ?.split("=");

    const values = options?.[1]?.split("-");

    if (values?.length > 0) {
      setValue(values.map((item) => +item));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(router.query).length === 0) {
      setValue([...sliderValue]);
    }
  }, [router.query]);

  return {
    value,
    handleChange,
  };
};

export default useFilterSlider;
