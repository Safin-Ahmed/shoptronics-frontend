import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { getAllReviewsByProductIdQuery } from "../lib/queries";

let isInitial = true;
const useReview = (reviewsData, productId) => {
  const [currentReviews, setCurrentReviews] = useState(reviewsData.data);
  const [pagination, setPagination] = useState({
    page: reviewsData.meta.pagination.page,
    pageCount: reviewsData.meta.pagination.pageCount,
  });

  const [getReviews, { data, loading, error }] = useLazyQuery(
    getAllReviewsByProductIdQuery,
    {
      variables: {
        id: productId,
        page: pagination.page,
      },
    }
  );

  const onClickHandler = () => {
    const { page, pageCount } = pagination;
    if (page < pageCount) {
      setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    }
    getReviews();
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (loading) {
      return;
    }

    const newReviews = data?.reviews?.data;

    if (!newReviews) return;
    setCurrentReviews((prev) => [...prev, ...newReviews]);
  }, [data, loading]);

  return {
    currentReviews,
    pagination,
    onClickHandler,
  };
};

export default useReview;
