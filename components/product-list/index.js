import { Grid, Stack } from "@mui/material";
import React from "react";
import ProductCard from "../Shared/ProductCard";

const styles = {
  cardItem: {
    flex: "25%",
    marginTop: 20,
    overflow: "hidden",
  },
};

const ProductList = ({ products, cols, view }) => {
  return (
    <>
      {view === "grid" && (
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid key={index} item xs={12} md={12 / cols}>
              <div style={styles.cardItem}>
                <ProductCard product={product} />
              </div>
            </Grid>
          ))}
        </Grid>
      )}

      {view === "list" && (
        <Stack spacing={2}>
          {products.map((product, index) => (
            <div
              key={index}
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
