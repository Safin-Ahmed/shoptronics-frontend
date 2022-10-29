import Image from "next/image";
import HomeStyled from "../../public/Styles/home.module.css";
import { Button, Rating, Typography, Box } from "@mui/material";
import { calculateAverageRating } from "../../utils/rating";
import Link from "next/link";
import useVariation from "../../hooks/useVariation";
import VariantSelect from "../UI/variantSelect";
import { useStoreActions } from "easy-peasy";
import CircularProgress from "@mui/material/CircularProgress";

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

  const {
    variantSelectOptions,
    chosenAttributes,
    setChosenAttributes,
    getVariants,
    variantData,
    isLoading,
  } = useVariation(id, title);

  const addItem = useStoreActions((action) => action.cart.addItem);

  console.log(`variant selection options for product ${id}`, {
    variantSelectOptions,
  });

  const handleAddToCart = async (e) => {
    e.preventDefault();
    let payload = {};
    if (variantSelectOptions?.length > 0) {
      payload = {
        id: +id,
        variantId: +variantData?.variations?.data[0]?.id,
        price: +variantData?.variations?.data[0]?.attributes?.price,
        discountPrice:
          +variantData?.variations?.data[0]?.attributes?.discountPrice,
      };
    } else {
      payload = {
        id: +id,
        variantId: null,
        price,
        discountPrice,
      };
    }

    addItem(payload);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: view === "list" ? "flex" : "",
          alignItems: view === "list" ? "center" : "",
          textAlign: "center",
        }}
      >
        <CircularProgress />;
      </div>
    );
  }

  return (
    <>
      <Link href={`/product/${product?.attributes?.slug}`}>
        <a>
          <div
            style={{
              display: view === "list" ? "flex" : "",
              alignItems: view === "list" ? "center" : "",
              height: view === "list" ? "auto" : "",
              flexDirection: view === "list" ? "row" : "",
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
            <div
              onClick={(e) => e.preventDefault()}
              className={HomeStyled.productCardFooter}
            >
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
                style={{
                  flexDirection: view === "list" ? "column" : "row",
                  alignItems: view !== "list" ? "center" : "",
                }}
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
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginTop: view === "list" ? "2rem" : 0,
                  }}
                >
                  {variantSelectOptions?.length > 0 &&
                    variantSelectOptions?.map((item, i) => {
                      return (
                        <VariantSelect
                          key={`product-${id}-variant-${item.id}`}
                          options={item.options}
                          name={`product-${id}-variant-${item.id}`}
                          setChosenAttributes={setChosenAttributes}
                        />
                      );
                    })}
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

            <Box sx={{ flexGrow: 1 }}></Box>

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
