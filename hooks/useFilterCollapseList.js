import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFilterCollapseList = (options, searchTerm, setSearchTerm) => {
  const router = useRouter();
  const [isViewAll, setIsViewAll] = useState(false);
  const [optionsList, setOptionsList] = useState([...options]);
  const handleViewAll = () => {
    if (searchTerm) {
      setSearchTerm("");
    }
    setOptionsList([...options]);
    setIsViewAll((prev) => !prev);
  };

  const handleQuery = (params) => {
    router.push(`/shop/${params}`);
  };

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
  };
};

export default useFilterCollapseList;
