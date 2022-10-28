import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../Shared/ProductCard";

const styles = {
  cardItem: {
    flex: "25%",
    marginTop: 20,
    overflow: "hidden",
  },
};

const ProductList = ({ products, cols }) => {
  return (
    <>
      <Grid container spacing={2}>
        {products?.map((product, index) => (
          <Grid key={index} item xs={12} md={12 / cols}>
            <div style={styles.cardItem}>
              <ProductCard product={product} />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
    // <div style={{ display: "flex", flexWrap: "wrap" }}>
    //
    // </div>
  );
};

export default ProductList;
