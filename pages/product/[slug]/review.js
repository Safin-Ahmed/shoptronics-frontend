import { useQuery } from "@apollo/client";
import { useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import React from "react";
import { getProductById } from "../../../api/api";
import BreadcrumbsCom from "../../../components/breadcrumbs/BreadcrumbsCom";
import ReviewForm from "../../../components/reviewForm";
import Loader from "../../../components/UI/Loader";
import { getOrdersByUserAndProductQuery } from "../../../lib/queries";

const Review = ({ product }) => {
  const router = useRouter();
  const productId = router.query.product;
  const auth = useStoreState((state) => state.auth);

  const {
    data: customerOrderedProduct,
    loading,
    error,
  } = useQuery(getOrdersByUserAndProductQuery, {
    variables: {
      email: auth.user.email,
      id: productId,
    },
  });
  console.log(customerOrderedProduct);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <BreadcrumbsCom />
      <ReviewForm
        customerOrderedProduct={customerOrderedProduct?.orders?.data}
        title={product.attributes.title}
        productId={productId}
      />
    </>
  );
};

export default Review;
export async function getServerSideProps(ctx) {
  const { product } = ctx.query;
  const productData = await getProductById(product);
  return {
    props: {
      product: productData,
    },
  };
}
