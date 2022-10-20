import Image from 'next/image'
import HomeStyled from '../../public/Styles/home.module.css'
import product from '../../public/static/product.png'
import rating from '../../public/static/rating-full.png'
import ratingHalf from '../../public/static/rating-half.png'

function ProductCard() {
  return (
    <div className={HomeStyled.productCard}>
        <div className={HomeStyled.productCardHeader}>
            <Image src={product} alt="head-phone"/>
        </div>
        <div className={HomeStyled.productCardFooter}>
            <a href="#">Head Phone</a>
            <h4>Smart Digital Watch</h4>
            <div className={HomeStyled.productCardFooterMoreInfo}>
                <div className={HomeStyled.productPrice}>$29.99 <span>$29.99</span></div>
                <div className={HomeStyled.productRating}><Image src={rating} alt="rating"/><Image src={rating} alt="rating"/><Image src={rating} alt="rating"/><Image src={rating} alt="rating"/><Image src={ratingHalf} alt="rating"/>  <span>(23)</span></div>
            </div>
        </div>


    </div>
  )
}

export default ProductCard