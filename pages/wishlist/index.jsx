import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { CancelOutlined, RemoveCircle } from "@mui/icons-material";
import {
  Alert,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useStoreActions, useStoreState } from "easy-peasy";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import BreadcrumbsCom from "../../components/breadcrumbs/BreadcrumbsCom";
import BottomPagination from "../../components/pagination/BottomPagination";
import Loader from "../../components/UI/Loader";
import { deleteFromWishlist, getWishlistByPagination } from "../../lib/queries";

const Wishlist = () => {
  const notify = useStoreActions((action) => action.snackbar.setMessage);
  const auth = useStoreState((state) => state.auth);
  const addToCart = useStoreActions((action) => action.cart.addItem);
  const [componentDidMount, setComponentDidMount] = useState(false);
  const router = useRouter();

  // !Delete by product id
  const [removeWishlist] = useMutation(deleteFromWishlist, {
    refetchQueries: () => [
      {
        query: getWishlistByPagination,
        variables: {
          id: +auth.user.id,
          pageNumber: parseInt(router.query.page, 10) || 1,
        },
      },
    ],
  });

  const [getWishlists, { loading, error, data }] = useLazyQuery(
    getWishlistByPagination,
    {
      variables: {
        id: +auth.user.id,
        pageNumber: parseInt(router.query.page, 10) || 1,
      },
    }
  );

  useEffect(() => {
    setComponentDidMount(true);
    getWishlists();
  }, [getWishlists]);

  if (!componentDidMount) return null;

  //!wishlist id
  const wishlistInfo = data?.wishlists?.data?.map((products) => {
    return products;
  });

  const deleteWishlistHandler = async (productId) => {
    const response = await removeWishlist({
      variables: { productId: +productId },
    });

    const { id } = response?.data?.deleteWishlistByProductId?.data;
    if (id) {
      notify({
        message: "Removed successfully From your wishlist",
        type: "success",
      });
    } else {
      notify({
        message: "Operation not successful",
        type: "warning",
      });
    }
  };

  const addToCartHandler = (product) => {
    const {
      id,
      attributes: {
        title,
        imgUrl,
        price,
        discountPrice,
        variations: { data: variantData },
      },
    } = product;

    const payload = {
      id: +id,
      title: variantData.length > 0 ? variantData[0]?.attributes?.title : title,
      imgUrl:
        variantData.length > 0 ? variantData[0]?.attributes?.imgUrl : imgUrl,
      variantId: variantData.length > 0 ? +variantData[0]?.id : null,
      price:
        variantData.length > 0 ? +variantData[0]?.attributes?.price : +price,
      discountPrice:
        variantData.length > 0
          ? +variantData[0]?.attributes?.discountPrice
          : +discountPrice,
      quantity: 1,
    };

    addToCart(payload);
    notify({
      message: "Product Added To Cart",
      type: "success",
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Shoptronics - Wishlist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="All your wishlist products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbsCom />
      <Box sx={{ m: "auto", my: 2, width: "80%" }}>
        {wishlistInfo?.length > 0 ? (
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 800 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <IconButton>
                        <RemoveCircle />
                      </IconButton>
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {wishlistInfo?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <IconButton
                          sx={{ "&:hover": { color: "#ff1111" } }}
                          onClick={() =>
                            deleteWishlistHandler(
                              row?.attributes.product?.data?.id
                            )
                          }
                        >
                          <CancelOutlined />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        {row?.attributes?.product?.data?.attributes?.title}
                      </TableCell>
                      <TableCell>
                        ${row?.attributes?.product?.data?.attributes?.price}
                      </TableCell>
                      <TableCell>
                        {row?.attributes?.product?.data?.attributes
                          ?.stockStatus === "in_stock" ? (
                          <span style={{ color: "green" }}>IN STOCK</span>
                        ) : (
                          <span style={{ color: "red" }}>STOCK OUT</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() =>
                            addToCartHandler(row.attributes.product.data)
                          }
                          variant="outlined"
                        >
                          Add to cart
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <BottomPagination
              pagination={{
                page: data?.wishlists?.meta?.pagination?.page,
                pageCount: data?.wishlists?.meta?.pagination?.pageCount,
              }}
            />
          </Box>
        ) : (
          <Alert
            sx={{
              width: "50%",
              m: "auto",
              py: "10px",
              alignItems: "center",
            }}
            severity="warning"
          >
            <Typography variant="h6">Your Wishlist in Empty</Typography>
          </Alert>
        )}
      </Box>
    </>
  );
};

export default Wishlist;
