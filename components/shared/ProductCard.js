import {
  Box,
  Button,
  Chip,
  Rating,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import { useStoreActions } from "easy-peasy";
import Image from "next/image";
import Link from "next/link";
import useVariation from "../../hooks/useVariation";
import HomeStyled from "../../public/Styles/home.module.css";
import { generateCategoryNames } from "../../utils/string";
import VariantSelect from "../UI/VariantSelect";

import WishlistButton from "../wishlistButton/WishlistButton";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function ProductCard({ product, view }) {
  const {
    id,
    attributes: {
      title,
      price,
      discountPrice,
      imgUrl,
      reviews,
      stockStatus,
      averageRating,
    },
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
  const subCategories = product?.attributes?.sub_categories?.data;
  const subCategoryNames = generateCategoryNames(subCategories);
  const categoryNames = generateCategoryNames(categories);
  const stock = stockStatus === "in_stock" ? "In Stock" : "Out of Stock";

  const {
    variantSelectOptions,
    chosenAttributes,
    setChosenAttributes,
    getVariants,
    variantData,
    isLoading,
  } = useVariation(+id, title);

  const addItem = useStoreActions((action) => action.cart.addItem);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    let payload = {};
    if (variantSelectOptions?.length > 0) {
      payload = {
        id: +id,
        title: variantData?.variations?.data[0]?.attributes?.title,
        imgUrl: variantData?.variations?.data[0]?.attributes?.imgUrl,
        variantId: +variantData?.variations?.data[0]?.id,
        price: +variantData?.variations?.data[0]?.attributes?.price,
        discountPrice:
          +variantData?.variations?.data[0]?.attributes?.discountPrice,
      };
    } else {
      payload = {
        id: +id,
        title,
        imgUrl: imgUrl,
        variantId: null,
        price,
        discountPrice,
      };
    }

    addItem(payload);
  };

  // if (isLoading) {
  //   return (
  //     <div
  //       style={{
  //         display: view === "list" ? "flex" : "",
  //         alignItems: view === "list" ? "center" : "",
  //         textAlign: "center",
  //       }}
  //     >
  //       <CircularProgress />;
  //     </div>
  //   );
  // }

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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Chip
                  label={stock}
                  size="small"
                  color={stock.includes("Out") ? "error" : "success"}
                  variant="outlined"
                  sx={{ mt: 1, maxWidth: "fit-content", mb: 1 }}
                />
                <StyledEngineProvider injectFirst>
                  <WishlistButton productId={product.id} />
                </StyledEngineProvider>
              </Box>
              <Typography variant="subTitle1">
                {categoryNames} | {subCategoryNames}
              </Typography>
              <Typography variant="subTitle1"></Typography>
              <h4 style={{ fontSize: view === "list" ? "30px" : "" }}>
                {title}
              </h4>

              {view === "list" && (
                <div>
                  <Rating value={averageRating} readOnly />
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
                  ${discountPrice ? discountPrice : price}{" "}
                  {discountPrice && (
                    <span style={{ fontSize: view === "list" ? "18px" : "" }}>
                      ${price}
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
                    !isLoading &&
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
                    <Rating value={averageRating} readOnly />
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
