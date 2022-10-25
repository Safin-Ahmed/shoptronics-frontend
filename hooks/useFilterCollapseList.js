import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  convertArrayToQueryParams,
  convertParamsToArray,
} from "../utils/queryParams";
import { formatString } from "../utils/string";

let isInitial = true;

const useFilterCollapseList = (options, searchTerm, setSearchTerm, type) => {
  const router = useRouter();
  const [isViewAll, setIsViewAll] = useState(false);
  const [optionsList, setOptionsList] = useState([...options]);
  const [queries, setQueries] = useState([]);
  const handleViewAll = () => {
    if (searchTerm) {
      setSearchTerm("");
    }
    setOptionsList([...options]);
    setIsViewAll((prev) => !prev);
  };

  const handleQuery = (params) => {
    isInitial = false;
    setQueries((prev) => {
      let newArr = prev
        ? [...prev, formatString(params.id)]
        : [formatString(params.id)];

      return newArr;
    });
  };

  useEffect(() => {
    const fullURL = router.asPath;
    const filterTypeOption = fullURL
      ?.split("?")[1]
      ?.split("&")
      ?.filter((item) => item.includes(type));
    console.log(filterTypeOption);
    const values = filterTypeOption?.[0]?.split("=")[1];
    const valuesArray = convertParamsToArray(values);
    setQueries(valuesArray);
  }, []);

  useEffect(() => {
    if (isInitial) {
      return;
    }
    router.push({
      query: { ...router.query, [type]: convertArrayToQueryParams(queries) },
    });
  }, [queries]);

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
