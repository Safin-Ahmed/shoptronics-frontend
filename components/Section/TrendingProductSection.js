import React from "react";
import HomeStyled from "../../public/Styles/home.module.css";
import ProductList from "../product-list";
import HomeHeader from "../Shared/HomeHeader";
import ProductCard from "../Shared/ProductCard";

function TrendingProductSection({ products }) {
  return (
    <div className={HomeStyled.SectionPadding}>
      <div className={HomeStyled.customContainer}>
        <HomeHeader subHomeHeader="Trending" homeHeader="Trending" />
      </div>
      <div className={HomeStyled.customContainer}>
        <div className={HomeStyled.bestSellingProduct}>
          <ProductList products={products} cols={3} />
        </div>
      </div>
    </div>
  );
}

export default TrendingProductSection;
