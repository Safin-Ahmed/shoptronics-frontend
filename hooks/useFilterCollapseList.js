import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  convertArrayToQueryParams,
  convertParamsToArray,
} from "../utils/queryParams";
import { formatString } from "../utils/string";

const useFilterCollapseList = (options, searchTerm, setSearchTerm, type) => {
  const router = useRouter();
  const [isViewAll, setIsViewAll] = useState(false);
  const [optionsList, setOptionsList] = useState([...options]);
  const [queries, setQueries] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const handleViewAll = () => {
    if (searchTerm) {
      setSearchTerm("");
    }
    setOptionsList([...options]);
    setIsViewAll((prev) => !prev);
  };

  const handleQuery = (params) => {
    const newQueryParam = formatString(params.id);
    setIsMounted(true);
    let newArr = [];
    const prevQueries = router.query[type]
      ? convertParamsToArray(router.query[type])
      : null;
    if (prevQueries) {
      if (prevQueries.includes(newQueryParam)) {
        newArr = prevQueries.filter((item) => item !== newQueryParam);
      } else {
        newArr = [...prevQueries, newQueryParam];
      }
    } else {
      newArr = [newQueryParam];
    }

    return setQueries(newArr);
  };

  useEffect(() => {
    const fullURL = router.asPath;
    const filterTypeOption = fullURL
      ?.split("?")[1]
      ?.split("&")
      ?.filter((item) => item.includes(type));
    const values = filterTypeOption?.[0]?.split("=")[1];
    let valuesArray = [];
    if (values) {
      valuesArray = convertParamsToArray(values);
    }
    setQueries(valuesArray);
  }, [router.query[type]]);

  useEffect(() => {
    if (!isMounted) {
      return;
    } else {
      if (queries?.length < 1) {
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
      } else {
        router.push(
          {
            query: {
              ...router.query,
              [type]: convertArrayToQueryParams(queries),
            },
          },
          undefined,
          { shallow: false }
        );
      }
    }
  }, [queries]);

  // useEffect(() => {
  //   if (isInitial) {
  //   }
  //   if (Object.keys(router.query).length === 0) {
  //     setQueries([]);
  //   } else {
  //     setQueries(convertParamsToArray(router.query[type]));
  //   }
  // }, [router.query[type]]);

  const finalOptionsList = isViewAll ? optionsList : optionsList.slice(0, 4);

  useEffect(() => {
    setOptionsList(
      options.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  return {
    finalOptionsList,
    handleViewAll,
    handleQuery,
    queries,
  };
};

export default useFilterCollapseList;
