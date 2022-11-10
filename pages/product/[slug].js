import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BreadcrumbsCom from "../../components/breadcrumbs/BreadcrumbsCom";
import ProductStyle from "./product.module.css";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Image from "next/image";
import HomeHeader from "../../components/Shared/HomeHeader";
import ProductCard from "../../components/Shared/ProductCard";
import { getProductBySlug } from "../../api/api";
import { useEffect } from "react";
import { GridArrowDownwardIcon, GridArrowUpwardIcon } from "@mui/x-data-grid";
import { Add, Remove } from "@mui/icons-material";
import useVariation from "../../hooks/useVariation";
import ProductList from "../../components/product-list";
import { useStoreActions } from "easy-peasy";

const Product = ({ product }) => {
  console.log({ product });
  const {
    id,
    attributes: {
      title,
      description,
      imgUrl,
      price,
      discountPrice,
      averageRating,
      brand,
      variations,
      relatedProducts,
      reviews,
    },
  } = product;

  const [mainImage, setMainImage] = useState(imgUrl);
  const [productGallery, setProductGallery] = useState([]);
  const [allProductImages, setAllProductImages] = useState([]);
  const [counter, setCounter] = useState(1);
  const {
    variantSelectOptions,
    chosenAttributes,
    setChosenAttributes,
    variantData,
  } = useVariation(id, title);
  console.log({ variantSelectOptions });
  console.log({ chosenAttributes });
  console.log({ variantData });

  const changeTheImage = (item) => {
    return setMainImage(item);
  };

  const handleVariantClick = (payload) => {
    setChosenAttributes((prev) => ({
      ...prev,
      [payload.name]: payload.value,
    }));
  };

  const navigateProductGallery = (action) => {
    if (action === "down") {
      console.log({ allProductImages });
      const lastIndex = allProductImages.findIndex(
        (item) => item === productGallery[productGallery.length - 1]
      );
      if (lastIndex < allProductImages.length - 1) {
        const remainingItems = allProductImages.slice(lastIndex + 1);
        const newItems =
          remainingItems.length > 4
            ? remainingItems.slice(0, 4)
            : remainingItems;

        setProductGallery(newItems);
        return;
      } else {
        return;
      }
    } else {
      const firstIndex = allProductImages.findIndex(
        (item) => item === productGallery[0]
      );
      if (firstIndex > 0) {
        const remainingItems =
          firstIndex > 4
            ? allProductImages.slice(firstIndex - 4, firstIndex)
            : allProductImages.slice(0, firstIndex);

        console.log("Remaining Items for up: ", {
          remainingItems,
          firstIndex,
        });
        setProductGallery([...remainingItems]);
        return;
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    let productImages = [];
    if (variations.data.length > 0) {
      const variationImages = variations.data.reduce((acc, cur) => {
        acc.push(cur.attributes.imgUrl);
        return acc;
      }, []);

      productImages = [imgUrl, ...variationImages];
    } else {
      productImages = [imgUrl];
    }
    setAllProductImages(productImages);
    setProductGallery(
      productImages.length > 4 ? productImages.slice(0, 4) : productImages
    );
  }, []);

  useEffect(() => {
    if (!variantData) {
      return;
    }
    setMainImage(variantData?.variations.data[0].attributes.imgUrl);
  }, [variantData]);

  const addItem = useStoreActions((action) => action.cart.addItem);
  const notify = useStoreActions((action) => action.snackbar.setMessage);

  const handleAddToCart = async () => {
    let payload = {};
    if (variantSelectOptions?.length > 0) {
      if (
        !chosenAttributes ||
        Object.keys(chosenAttributes).length < variantSelectOptions.length
      ) {
        notify({
          message: "You need to choose the required variants",
          type: "error",
        });
        return;
      }
      payload = {
        id: +id,
        title: variantData?.variations?.data[0]?.attributes?.title,
        imgUrl: variantData?.variations?.data[0]?.attributes?.imgUrl,
        variantId: +variantData?.variations?.data[0]?.id,
        price: +variantData?.variations?.data[0]?.attributes?.price,
        discountPrice:
          +variantData?.variations?.data[0]?.attributes?.discountPrice,
        quantity: counter,
      };
    } else {
      payload = {
        id: +id,
        title,
        imgUrl,
        variantId: null,
        price,
        discountPrice,
        quantity: counter,
      };
    }

    addItem(payload);
    notify({
      message: "Product Added To Cart",
      type: "success",
    });
  };

  return (
    <Box>
      <BreadcrumbsCom breadcrumbs={title} />

      <Container sx={{ pb: 10 }}>
        <Grid
          container
          style={{
            boxShadow: "1px 3px 5px #0000003c",
            margin: "40px 0 60px 0",
            alignItems: "center !important",
          }}
        >
          <Grid item xs="12" md="12" lg="6" style={{ alignSelf: "center" }}>
            <Box
              style={{ textAlign: "center", padding: "40px" }}
              className={ProductStyle.productLeft}
            >
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs="3">
                  <IconButton
                    sx={{ mb: 1 }}
                    onClick={() => navigateProductGallery("up")}
                  >
                    <GridArrowUpwardIcon />
                  </IconButton>
                  <div
                    className={ProductStyle.productGallery}
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    {productGallery.map((item, i) => (
                      <Image
                        key={i}
                        src={item}
                        onClick={() => changeTheImage(item)}
                        alt="Product Image"
                        width={80}
                        height={80}
                        objectFit="contain"
                        className={ProductStyle.productGalleryImage}
                      />
                    ))}
                  </div>
                  <IconButton
                    sx={{ mt: 1 }}
                    onClick={() => navigateProductGallery("down")}
                  >
                    <GridArrowDownwardIcon />
                  </IconButton>
                </Grid>
                <Grid item xs="9">
                  <Image
                    width={300}
                    height={300}
                    objectFit="contain"
                    src={mainImage}
                    alt="Name"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs="12" md="12" lg="6">
            <Box
              className={ProductStyle.productRight}
              style={{ padding: "40px" }}
            >
              <div
                className={ProductStyle.productRightHeader}
                sx={{ display: "flex" }}
              >
                <Box
                  className={ProductStyle.productRightHeaderReview}
                  sx={{ display: "flex" }}
                >
                  <Typography variant="span" component="legend">
                    Review:
                  </Typography>
                  <Rating name="read-only" value={averageRating} readOnly />
                  <Typography>{`(${reviews.data.length})`}</Typography>
                </Box>
                <Box
                  className={ProductStyle.productRightHeaderIcons}
                  spacing={2}
                  sx={{ marginBottom: "10px", display: "flex", gap: "10px" }}
                >
                  <FavoriteBorderIcon style={{ cursor: "pointer" }} />
                  <ShareOutlinedIcon style={{ cursor: "pointer" }} />
                </Box>
              </div>
              <div key="index" className={ProductStyle.productRightInfo}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h5">
                  Product Id: <span>{id}</span>
                </Typography>
                <Typography
                  variant="span"
                  className={ProductStyle.productRightInfoDec}
                >
                  {description}
                </Typography>
                <Typography variant="h5">
                  Product Brand: <span>{brand.data.attributes.name}</span>
                </Typography>

                <div className={ProductStyle.productRightPriceBox}>
                  <Typography variant="h3">
                    ${discountPrice ? discountPrice : price}
                  </Typography>
                  <div className={ProductStyle.deviderLine}></div>
                  {discountPrice && (
                    <Typography variant="h3">
                      <span className={ProductStyle.productRightPriceDiscount}>
                        {" "}
                        ${price}
                      </span>{" "}
                      <sup className={ProductStyle.productPriceSub}>
                        {(((discountPrice - price) / price) * 100).toFixed(2)}%
                      </sup>
                    </Typography>
                  )}
                </div>

                <div className={ProductStyle.variantSection}>
                  {variantSelectOptions?.map((item) => (
                    <div key={`attribute-${item.id}`}>
                      <Typography variant="h5">{item.name} :</Typography>
                      {item.options?.map((option, i) => (
                        <Chip
                          key={`${id}-${item.name}-${i}`}
                          label={option.value}
                          variant="outlined"
                          size="large"
                          sx={{
                            borderRadius: 0,
                            mr: 2,
                            borderColor:
                              chosenAttributes[`${id}-${item.name}`] ===
                              option.value
                                ? "#000"
                                : "#eee",
                            "&:last-child": { mr: 0 },
                          }}
                          onClick={() =>
                            handleVariantClick({
                              name: `${id}-${item.name}`,
                              value: option.value,
                            })
                          }
                        />
                      ))}
                    </div>
                  ))}
                </div>

                <div className={ProductStyle.productRightFooter}>
                  <div className={ProductStyle.productInputIncre}>
                    <Remove
                      onClick={() =>
                        counter === 1 ? setCounter(1) : setCounter(counter - 1)
                      }
                      fontSize="small"
                      style={{ color: "rgb(85 79 79)", cursor: "pointer" }}
                    />
                    <span style={{ alignSelf: "center" }}>{counter}</span>
                    <Add
                      onClick={() => setCounter(counter + 1)}
                      fontSize="small"
                      style={{ color: "rgb(85 79 79)", cursor: "pointer" }}
                    />
                  </div>
                  <Button
                    className={ProductStyle.productbtn}
                    variant="contained"
                    startIcon={<ShoppingCartOutlinedIcon />}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>

        {relatedProducts.data.length > 0 && (
          <>
            <HomeHeader subHomeHeader="Related" homeHeader="Related" />
            <ProductList products={relatedProducts.data.slice(0, 3)} cols={3} />
          </>
        )}
      </Container>
    </Box>
  );
};

export default Product;
export async function getServerSideProps(ctx) {
  const { params, query } = ctx;
  const slug = query.slug;
  const data = await getProductBySlug(slug);
  console.log(data);

  return {
    props: {
      product: data,
    },
  };
}
