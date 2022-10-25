import { gql } from "@apollo/client";
import React from "react";
import { getProductsByPageNumber } from "../../api/api";
import BottomPagination from "../../components/pagination/BottomPagination";
import TopPagination from "../../components/pagination/TopPagination";
import ProductList from "../../components/product-list";
import FilterBar from "../../components/Shared/FilterBar";
import client from "../../lib/apolloClient";

const Shop = ({ products }) => {
  console.log({ products });
  return (
    <div
      className="section-padding"
      style={{ display: "flex", padding: "2rem 2rem" }}
    >
      <div
        style={{
          width: "20%",
          height: "100%",
        }}
      >
        <FilterBar />
      </div>
      <div style={{ width: "80%" }}>
        <TopPagination />
        <ProductList products={products} cols={3} />
        <BottomPagination />
      </div>
    </div>
  );
};

export default Shop;
export async function getServerSideProps(ctx) {
  const { params, query } = ctx;
  const pageNumber = +query.page || 1;

  const { data, errors, loading } = await getProductsByPageNumber(pageNumber);

  const { data: products } = data;

  return {
    props: {
      products,
    },
  };
}
