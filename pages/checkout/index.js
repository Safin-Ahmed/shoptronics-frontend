import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import Classes from "./checkout.module.css";
import BreadcrumbsCom from "../../components/breadcrumbs/BreadcrumbsCom";
import Image from "next/image";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { placeOrderQuery } from "../../lib/queries";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "../../components/UI/Loader";
import Head from "next/head";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = () => {
  const cartcheckoutList = useStoreState((state) => state.cart.cart);
  const auth = useStoreState((state) => state.auth);
  const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: auth.user.email,
    address: "",
    note: "",
    paymentMethod: "Stripe",
    deliveryFee: 0,
  };
  const [state, setState] = useState(initialState);
  const [formError, setFormError] = useState("");
  const [componentDidMount, setComponentDidMount] = useState(false);
  const [placeOrder, { data, loading, error }] = useMutation(placeOrderQuery);
  const notify = useStoreActions((action) => action.snackbar.setMessage);
  const router = useRouter();

  const handleStripe = async () => {
    const stripe = await stripePromise;
    const orderData = {
      ...state,
      cartProducts: orderProducts,
    };
    const response = await placeOrder({
      variables: {
        order: orderData,
      },
    });
    const session =
      response?.data?.buildOrder?.data.attributes.checkout_session;

    const result = await stripe.redirectToCheckout({
      sessionId: session,
    });
  };

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/login", undefined, { shallow: true });
    }
    setComponentDidMount(true);
  }, [auth.isAuthenticated, router]);

  if (!componentDidMount) return null;

  //total item of product
  const totalItems = cartcheckoutList.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue.quantity;
  },
  0);

  //total price of products
  const itemsPrice = cartcheckoutList.reduce(function (
    accumulator,
    currentValue
  ) {
    return (
      accumulator +
      (currentValue.discountPrice
        ? currentValue.discountPrice * currentValue.quantity
        : currentValue.price * currentValue.quantity)
    );
  },
  0);

  // total price with shipping fee
  const totalPrice = itemsPrice + +state.deliveryFee;

  // shaping cart items for server
  const orderProducts = cartcheckoutList.reduce((acc, cur) => {
    acc.push({
      id: cur.id,
      variantId: cur.variantId,
      quantity: cur.quantity,
    });

    return acc;
  }, []);

  const inputHandling = (e) => {
    const { name, value } = e.target;
    if (name === "deliveryFee") {
      return setState((prev) => ({
        ...prev,
        [name]: +value,
      }));
    }
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOrder = async () => {
    if (!state.firstName || !state.lastName || !state.phone || !state.address) {
      return setFormError("Please fill all the required fields");
    }
    setFormError("");
    if (state.paymentMethod === "Stripe") {
      handleStripe();
      return;
    }
    const orderData = {
      ...state,
      cartProducts: orderProducts,
    };

    const response = await placeOrder({
      variables: {
        order: orderData,
      },
    });

    const order = response?.data?.buildOrder?.data;
    if (order) {
      notify({
        message: "Order placed successfully!",
        type: "success",
      });
      setState(initialState);
      router.replace(`/checkout/thank-you?orderNumber=${order.id}`);
    } else {
      notify({
        message: "Error creating order!",
        type: "error",
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Shoptronics - Checkout</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Checkout all your product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbsCom sx={{ zIndex: "-9" }} breadcrumbs="Cart" />

      <Box>
        <Container sx={{ py: 5, position: "relative", zIndex: "1" }}>
          {cartcheckoutList.length === 0 && (
            <>
              <Typography variant="h4">
                There is no product in your cart!
              </Typography>
              <Button
                onClick={() => router.push("/shop")}
                sx={{ mt: 2 }}
                variant="contained"
              >
                Go Back To Shop
              </Button>
            </>
          )}
          {cartcheckoutList.length > 0 && (
            <Grid
              container
              columnGap={1}
              sx={{
                justifyContent: "space-around",
                marginBottom: "50px",
                alignItems: "start",
              }}
            >
              <Grid
                sx={{
                  backgroundColor: "#fff",
                  zIndex: "999",
                  marginTop: "-30px",
                }}
                item
                xs="12"
                md="8"
                lg="6"
                className={Classes.checkoutLeft}
              >
                <form>
                  <Grid
                    container
                    rowGap={2}
                    columnGap={1}
                    justifyContent="center"
                    sx={{
                      pb: {
                        xs: 5,
                        lg: 25,
                      },
                    }}
                  >
                    <Grid item xs="12" md="5" lg="5">
                      <TextField
                        id="outlined-name"
                        label="First Name"
                        fullWidth
                        name="firstName"
                        value={state.firstName}
                        onChange={inputHandling}
                      />
                    </Grid>
                    <Grid item xs="12" md="5" lg="5">
                      <TextField
                        id="outlined-name"
                        label="Last Name"
                        fullWidth
                        name="lastName"
                        value={state.lastName}
                        onChange={inputHandling}
                      />
                    </Grid>
                    <Grid item xs="12" md="5" lg="5">
                      <TextField
                        id="outlined-name"
                        label="Phone"
                        fullWidth
                        name="phone"
                        value={state.phone}
                        onChange={inputHandling}
                      />
                    </Grid>
                    <Grid item xs="12" md="5" lg="5">
                      <TextField
                        id="outlined-name"
                        label="Email"
                        fullWidth
                        name="email"
                        value={state.email}
                        disabled
                      />
                    </Grid>
                    <Grid item xs="10" md="10" lg="10">
                      <TextField
                        id="outlined-name"
                        label="Street Address"
                        name="address"
                        value={state.address}
                        fullWidth
                        onChange={inputHandling}
                      />
                    </Grid>
                    <Grid item xs="10" md="10" lg="10">
                      <TextField
                        id="outlined-name"
                        label="Note"
                        name="note"
                        value={state.note}
                        fullWidth
                        onChange={inputHandling}
                      />
                    </Grid>
                    {formError && (
                      <Typography variant="h6" color="error">
                        {formError}
                      </Typography>
                    )}
                  </Grid>
                </form>
              </Grid>

              <Grid
                item
                xs="12"
                md="6"
                lg="5"
                sx={{
                  backgroundColor: "#fff",
                  zIndex: "999",
                  marginTop: "-30px",
                  borderRadius: "3px",
                }}
              >
                <Box className={Classes.checkoutRight}>
                  <div>
                    <Typography variant="h3">Your order</Typography>
                    <div className={Classes.checkoutRightProduct}>
                      {cartcheckoutList.map((checkoutItem, index) => {
                        return (
                          <Grid
                            key={index}
                            container
                            spacing={2}
                            className={Classes.checkoutRightProductitem}
                          >
                            <Grid item xs="3">
                              <Image
                                src={checkoutItem.imgUrl}
                                alt="Image Product"
                                height="70"
                                width="70"
                              ></Image>
                            </Grid>
                            <Grid
                              item
                              xs="9"
                              sx={{ alignSelf: "center" }}
                              className={Classes.checkoutRightProductInfo}
                            >
                              <Typography variant="h5">
                                {checkoutItem.title}
                              </Typography>
                              <Typography>
                                {" "}
                                <span
                                  className={
                                    Classes.checkoutRightProductInfoPrice
                                  }
                                ></span>
                                $
                                {checkoutItem.discountPrice
                                  ? checkoutItem.discountPrice
                                  : checkoutItem.price}{" "}
                                X{" "}
                                <span
                                  className={
                                    Classes.checkoutRightProductInfoQuntity
                                  }
                                ></span>
                                {checkoutItem.quantity}
                              </Typography>
                            </Grid>
                          </Grid>
                        );
                      })}
                    </div>
                    <ul>
                      <li>
                        <span>Total items ({totalItems})</span>{" "}
                        <span>${itemsPrice}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Typography variant="h3">Shipping</Typography>
                    <div className={Classes.checkoutRightinfo}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="deliveryFee"
                          defaultValue={0}
                          onChange={inputHandling}
                          value={state.deliveryFee}
                        >
                          <FormControlLabel
                            value={0}
                            control={<Radio />}
                            label="Shipping Free"
                            className={Classes.checkoutRightRadio}
                          />
                          <FormControlLabel
                            value={20}
                            control={<Radio />}
                            label="Shipping fee $20"
                            className={Classes.checkoutRightRadio}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <ul>
                      <li>
                        <span>Total</span> <span>${totalPrice}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Typography variant="h3">Payment</Typography>
                    <div className={Classes.checkoutRightinfo}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="paymentMethod"
                          value={state.paymentMethod}
                          onChange={inputHandling}
                        >
                          <FormControlLabel
                            value="Stripe"
                            control={<Radio />}
                            label="Stripe"
                            className={Classes.checkoutRightRadio}
                          />
                          <FormControlLabel
                            value="COD"
                            control={<Radio />}
                            label="Cash on delivery"
                            className={Classes.checkoutRightRadio}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                  <div className={Classes.cartRightbtnn}>
                    <Button
                      onClick={handleOrder}
                      className={Classes.cartRightbtn}
                      variant="contained"
                    >
                      {loading ? <Loader /> : "Place Order"}
                    </Button>
                  </div>
                </Box>
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default Checkout;
