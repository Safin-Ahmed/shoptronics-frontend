import React from 'react'
import HomeHeader from '../Shared/HomeHeader'
import ProductCard from "../Shared/ProductCard";
import HomeStyled from '../../public/Styles/home.module.css'

function BestSellingSection() {
  return (
    <div className={HomeStyled.SectionPadding}>
        <div className={HomeStyled.customContainer}>
        <HomeHeader subHomeHeader="Best" homeHeader="Best Selling"/>
        </div>
            <div className={HomeStyled.customContainer}>
                <div className={HomeStyled.bestSellingProduct}>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div> 
    </div>
  )
}

export default BestSellingSection