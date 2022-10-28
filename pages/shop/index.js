import { gql } from "@apollo/client";
import React, { useState } from "react";
import { getProductsByPageNumber } from "../../api/api";
import BreadcrumbsCom from "../../components/breadcrumbs/BreadcrumbsCom";
import BottomPagination from "../../components/pagination/BottomPagination";
import TopPagination from "../../components/pagination/TopPagination";
import ProductList from "../../components/product-list";
import FilterBar from "../../components/Shared/FilterBar";
import client from "../../lib/apolloClient";

const Shop = ({ products, pagination }) => {
  const [view, setView] = useState("grid");

  const viewHandler = (style) => {
    setView(style);
  };
  return (
    <>
      <BreadcrumbsCom breadcrumbs="shop" />

      <div
        className="section-padding"
        style={{
          display: "flex",
          padding: "2rem 2rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "20%",
            height: "100%",
          }}
        >
          <FilterBar />
        </div>
        <div style={{ width: "78%" }}>
          <TopPagination viewHandler={viewHandler} pagination={pagination} />
          <ProductList view={view} products={products} cols={3} />
          <BottomPagination pagination={pagination} />
        </div>
      </div>
    </>
  );
};

export default Shop;
export async function getServerSideProps(ctx) {
  const { params, query } = ctx;
  const pageNumber = +query.page || 1;
  const sort = query.sort ?? null;

  const { data } = await getProductsByPageNumber(pageNumber, sort);

  const {
    data: products,
    meta: { pagination },
  } = data;

  return {
    props: {
      products,
      pagination,
    },
  };
}
