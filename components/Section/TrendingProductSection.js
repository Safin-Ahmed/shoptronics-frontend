import React from 'react'
import HomeHeader from '../Shared/HomeHeader'
import ProductCard from "../Shared/ProductCard";
import HomeStyled from '../../public/Styles/home.module.css'

function TrendingProductSection() {
  return (
    <div className={HomeStyled.SectionPadding}>
        <div className={HomeStyled.customContainer}>
        <HomeHeader subHomeHeader="Trending" homeHeader="Trending"/>
        </div>
            <div className={HomeStyled.customContainer}>
                <div className={HomeStyled.bestSellingProduct}>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div> 
    </div>
  )
}

export default TrendingProductSection