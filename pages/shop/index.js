import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { getProductsByPageNumber } from "../../api/api";
import BreadcrumbsCom from "../../components/breadcrumbs/BreadcrumbsCom";
import BottomPagination from "../../components/pagination/BottomPagination";
import TopPagination from "../../components/pagination/TopPagination";
import ProductList from "../../components/product-list";
import FilterBar from "../../components/Shared/FilterBar";
import {
  generateGetProductsQuery,
  getProductsByCategories,
} from "../../lib/queries";
import { convertParamsToArray } from "../../utils/queryParams";

const Shop = ({ products, pagination }) => {
  const [view, setView] = useState("grid");
  const router = useRouter();
  const searchTerm = router.query.search;

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
          {searchTerm && (
            <div style={{ marginBottom: "2rem" }}>
              <Typography variant="h5">
                Showing Search Results for : {searchTerm}
              </Typography>
            </div>
          )}
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
  const subCategories = convertParamsToArray(query["filter_category"]);
  const filter_price = query["filter_price"]?.split("-");
  const filter_brands = convertParamsToArray(query["filter_brand"]);
  const stock = convertParamsToArray(query["filter_availability"]);
  const rating = convertParamsToArray(query["filter_rating"])?.map(
    (item) => +item
  );
  const searchTerm = query["search"];
  const attributes = Object.keys(query)
    .filter((item) => item.includes("attribute"))
    .map((item) => query[item]);
  const gqlQuery = generateGetProductsQuery();
  const queryObject = {
    subCategories,
    startPrice: +filter_price?.[0],
    endPrice: +filter_price?.[1],
    stock,
    brands: filter_brands,
    attributes,
    rating,
    searchTerm,
  };

  const { data } = await getProductsByPageNumber(
    pageNumber,
    sort,
    gqlQuery,
    queryObject
  );

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
