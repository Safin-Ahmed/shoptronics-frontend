import Image from "next/image";
import HomeStyled from "../../public/Styles/home.module.css";
import product from "../../public/static/product.png";
import rating from "../../public/static/rating-full.png";
import ratingHalf from "../../public/static/rating-half.png";
import { Button, Rating } from "@mui/material";

function ProductCard({ product }) {
  // const {
  //   id,
  //   attributes: { title, description, price, discountPrice, imgUrl },
  // } = product;

  const categories = product?.attributes.categories.data;

  const categoryNames = categories?.map((item, i) => {
    if (i === categories.length - 1) {
      return `${item.attributes.name}`;
    } else {
      return `${item.attributes.name}, `;
    }
  });
  return (
    <div className={HomeStyled.productCard}>
      <div className={HomeStyled.productCardHeader}>
        <Image
          width={350}
          height={350}
          objectFit="contain"
          // src={imgUrl}
          alt="head-phone"
        />
      </div>
      <div className={HomeStyled.productCardFooter}>
        <a href="#">{categoryNames}</a>
        {/* <h4>{title}</h4> */}
        <div className={HomeStyled.productCardFooterMoreInfo}>
          <div className={HomeStyled.productPrice}>
            {/* ${price} {discountPrice && <span>${discountPrice}</span>} */}
          </div>
          <div>
            <Rating value={4} readOnly />
          </div>
        </div>
      </div>
      <div className={HomeStyled.add_to_cart_btn}>
        <Button
          sx={{ background: "#3C1FF4 !important", mt: 3 }}
          fullWidth
          variant="contained"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
