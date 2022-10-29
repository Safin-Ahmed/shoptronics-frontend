import { useRouter } from "next/router";

const usePagination = ({ page, pageCount }) => {
  const router = useRouter();
  const getNextPage = () => {
    router.push({
      query: { ...router.query, page: page < pageCount ? page + 1 : page },
    });
  };

  const getPrevPage = () => {
    router.push({
      query: { ...router.query, page: page > 1 ? page - 1 : page },
    });
  };

  const getPage = (number) => {
    router.push({
      query: { ...router.query, page: number },
    });
  };

  return {
    getNextPage,
    getPrevPage,
    getPage,
  };
};

export default usePagination;
