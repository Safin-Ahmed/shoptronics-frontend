import React from "react";
import HomeHeader from "../shared/HomeHeader";
import ProductCard from "../shared/ProductCard";
import HomeStyled from "../../public/Styles/home.module.css";
import ProductList from "../product-list";

function BestSellingSection({ products }) {
  return (
    <div className={HomeStyled.SectionPadding}>
      <div className={HomeStyled.customContainer}>
        <HomeHeader subHomeHeader="Best" homeHeader="Best Selling" />
      </div>
      <div className={HomeStyled.customContainer}>
        <div className={HomeStyled.bestSellingProduct}>
          <ProductList products={products} cols={4} />
        </div>
      </div>
    </div>
  );
}

export default BestSellingSection;
