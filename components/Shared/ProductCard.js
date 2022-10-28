import Image from "next/image";
import HomeStyled from "../../public/Styles/home.module.css";
import { Button, Rating, Typography } from "@mui/material";
import { calculateAverageRating } from "../../utils/rating";
import Link from "next/link";

function ProductCard({ product, view }) {
  const {
    id,
    attributes: { title, price, discountPrice, imgUrl, reviews },
  } = product || {
    id: "test",
    attributes: {
      title: "test product",
      price: 15,
      discountPrice: null,
      imgUrl: "",
      reviews: {
        data: [],
      },
    },
  };

  const categories = product?.attributes?.categories?.data;
  const rating = calculateAverageRating(reviews?.data);
  const categoryNames = categories?.map((item, i) => {
    if (i === categories.length - 1) {
      return `${item.attributes.name}`;
    } else {
      return `${item.attributes.name}, `;
    }
  });

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log("Button is Clicked for id: ", id);
  };

  return (
    <>
      <Link href={`/product/${product?.attributes?.slug}`}>
        <a>
          <div
            style={{
              display: view === "list" ? "flex" : "",
              alignItems: view === "list" ? "center" : "",
            }}
            className={HomeStyled.productCard}
          >
            <div className={HomeStyled.productCardHeader}>
              <Image
                width={350}
                height={350}
                objectFit="contain"
                src={imgUrl || ""}
                alt={title}
              />
            </div>
            <div className={HomeStyled.productCardFooter}>
              <Typography variant="subTitle1">{categoryNames}</Typography>
              <h4 style={{ fontSize: view === "list" ? "30px" : "" }}>
                {title}
              </h4>
              {view === "list" && (
                <div>
                  <Rating value={rating} readOnly />
                </div>
              )}
              <div
                style={{ flexDirection: view === "list" ? "column" : "row" }}
                className={HomeStyled.productCardFooterMoreInfo}
              >
                <div
                  style={{ fontSize: view === "list" ? "20px" : "" }}
                  className={HomeStyled.productPrice}
                >
                  ${price}{" "}
                  {discountPrice && (
                    <span style={{ fontSize: view === "list" ? "18px" : "" }}>
                      ${discountPrice}
                    </span>
                  )}
                </div>
                {view !== "list" && (
                  <div>
                    <Rating value={rating} readOnly />
                  </div>
                )}

                {view === "list" && (
                  <div className={HomeStyled.add_to_cart_btn}>
                    <Button
                      sx={{ background: "#3C1FF4 !important", mt: 3 }}
                      fullWidth
                      variant="contained"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </Button>
                  </div>
                )}
              </div>
            </div>
            {view !== "list" && (
              <div className={HomeStyled.add_to_cart_btn}>
                <Button
                  sx={{ background: "#3C1FF4 !important", mt: 3 }}
                  fullWidth
                  variant="contained"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              </div>
            )}
          </div>
        </a>
      </Link>
    </>
  );
}

export default ProductCard;
