import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useSorting = () => {
  const router = useRouter();
  const [state, setState] = useState({ value: "" });

  useEffect(() => {
    if (router.query.sort) {
      setState((prev) => ({ ...prev, value: router.query.sort }));
    } else {
      setState((prev) => ({ ...prev, value: "default" }));
    }
  }, [router]);
  const addSort = (e) => {
    if (e.target.value === "default") {
      const newRouter = { ...router.query };
      delete newRouter["sort"];
      router.push({
        query: newRouter,
      });

      return;
    }
    router.push({
      query: {
        ...router.query,
        sort: e.target.value,
      },
    });
  };

  return {
    addSort,
    state,
  };
};

export default useSorting;
