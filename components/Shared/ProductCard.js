import Image from "next/image";
import HomeStyled from "../../public/Styles/home.module.css";
import { Button, Rating } from "@mui/material";

function ProductCard({ product, view }) {
  const {
    id,
    attributes: { title, description, price, discountPrice, imgUrl },
  } = product;

  const categories = product.attributes.categories.data;

  const categoryNames = categories.map((item, i) => {
    if (i === categories.length - 1) {
      return `${item.attributes.name}`;
    } else {
      return `${item.attributes.name}, `;
    }
  });
  return (
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
          src={imgUrl}
          alt="head-phone"
        />
      </div>
      <div className={HomeStyled.productCardFooter}>
        <a href="#">{categoryNames}</a>
        <h4 style={{ fontSize: view === "list" ? "30px" : "" }}>{title}</h4>
        {view === "list" && (
          <div>
            <Rating value={4} readOnly />
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
              <Rating value={4} readOnly />
            </div>
          )}

          {view === "list" && (
            <div className={HomeStyled.add_to_cart_btn}>
              <Button
                sx={{ background: "#3C1FF4 !important", mt: 3 }}
                fullWidth
                variant="contained"
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
          >
            Add to cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
