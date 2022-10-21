import React from "react";
import BottomPagination from "../../components/pagination/BottomPagination";
import TopPagination from "../../components/pagination/TopPagination";
import ProductList from "../../components/product-list";
import FilterBar from "../../components/Shared/FilterBar";



const Shop = () => {
  return (
    <div className="section-padding" style={{ display: 'flex' }}>
      <div style={{ width: "20%", float: "left", marginRight: 50, height: "100%" }}>
        <FilterBar />
      </div>
      <div style={{ width: "80%" }}>
        <TopPagination />
        <ProductList />
        <BottomPagination />
      </div>
    </div>
  );
};

export default Shop;
