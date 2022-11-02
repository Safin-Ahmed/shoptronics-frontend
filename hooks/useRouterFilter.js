import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  convertArrayToQueryParams,
  convertParamsToArray,
} from "../utils/queryParams";
import { formatString } from "../utils/string";

let isInitial = true;

const useRouterFilter = (type) => {
  const router = useRouter();
  const [queries, setQueries] = useState([]);
  const addQueryParams = (e) => {
    isInitial = false;
    if (e.target.checked) {
      setQueries((prev) => {
        let newArr = prev
          ? [...prev, formatString(e.target.value)]
          : [formatString(e.target.value)];
        return newArr;
      });
    } else {
      const filteredItems = queries.filter(
        (item) => item !== formatString(e.target.value)
      );
      setQueries([...filteredItems]);
    }
  };

  // UseEffect to get the query params when component mounts for the first time

  useEffect(() => {
    const fullURL = router.asPath;
    const filterTypeOption = fullURL
      ?.split("?")[1]
      ?.split("&")
      ?.filter((item) => item.includes(type));
    const values = filterTypeOption?.[0]?.split("=")[1];
    const valuesArray = convertParamsToArray(values);
    setQueries(valuesArray);
  }, []);

  // UseEffect to add query params whenever the queries change
  useEffect(() => {
    if (isInitial) {
      return;
    }

    if (queries?.length === 0) {
      const newRouter = { ...router.query };
      delete newRouter[type];
      router.push(
        {
          query: newRouter,
        },
        undefined,
        { shallow: false }
      );

      return;
    }

    router.push(
      {
        query: {
          ...router.query,
          [type]: `${convertArrayToQueryParams(queries)}`,
        },
      },
      undefined,
      { shallow: false }
    );
  }, [queries]);

  return {
    addQueryParams,
    queries,
  };
};

export default useRouterFilter;
