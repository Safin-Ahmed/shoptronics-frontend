import { useLazyQuery } from "@apollo/client";
import { Grid, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { convertParamsToArray } from "../../utils/queryParams";
import ProductCard from "../shared/ProductCard";

const styles = {
  cardItem: {
    flex: "25%",
    marginTop: 20,
    overflow: "hidden",
  },
};

const ProductList = ({ products, cols, view = "grid" }) => {
  return (
    <>
      {view === "grid" && (
        <Grid container spacing={2}>
          {products?.map((product, index) => (
            <Grid key={product.id} item xs={12} md={12 / cols}>
              <div style={styles.cardItem}>
                <ProductCard product={product} view="grid" />
              </div>
            </Grid>
          ))}
        </Grid>
      )}

      {view === "list" && (
        <Stack spacing={2}>
          {products?.map((product, index) => (
            <div
              key={product.id}
              style={{ marginTop: "2rem", width: "50%", margin: "auto" }}
            >
              <ProductCard product={product} view="list" />
            </div>
          ))}
        </Stack>
      )}
    </>
    // <div style={{ display: "flex", flexWrap: "wrap" }}>
    //
    // </div>
  );
};

export default ProductList;
