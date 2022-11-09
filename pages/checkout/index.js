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
import TextFieldMUI from "@mui/material/TextField";
import BreadcrumbsCom from "../../components/breadcrumbs/BreadcrumbsCom";
import img from "../../public/static/product-4.png";
import Image from "next/image";
import { useStoreState } from "easy-peasy";
import { useState } from "react";

const Checkout = () => {
  const cartcheckoutList = useStoreState(state=> state.cart.cart);

  //total item of product
  const totalItems =  cartcheckoutList.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue.quantity;
    }, 0);

     //total item of product
  const itemsPrice =  cartcheckoutList.reduce(function(accumulator, currentValue) {
    return accumulator + (currentValue.discountPrice ? currentValue.discountPrice * currentValue.quantity : currentValue.price * currentValue.quantity);
  }, 0);


  const allInfoCheckout = {
    firstName: "Monir",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    note: "",
    totalItemsCount: "",
    totalItemsPrice: "",
    totalPricing: "",
    paymentMethod: "",
    shipping: "",
  }
  const [dateStore,setdateStore]= useState(allInfoCheckout);
  const [useSubmit,setuseSubmit]= useState(false);
  const  {firstName,lastName,email,phoneNumber,address,note,totalItemsCount,totalItemsPrice,totalPricing,shipping,paymentMethod}= dateStore
console.log(dateStore);

    const inputHandling =(e)=>{

      const {name,value}= e.target;
      console.log(value);
      setdateStore({
        [name]: value,
      })
    }
  
  
  return (
    <div>
      <BreadcrumbsCom sx={{ zIndex: "-9" }} breadcrumbs="Cart" />
      <Box>
        <Container>
          <Grid
            container
            columnGap={1}
            sx={{ justifyContent: "space-around", marginBottom: "50px" }}
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
                <Grid container>
                  <Grid item xs="12" md="6" lg="6">
                    {/* <TextFieldMUI
                      id="outlined-basic"
                      label="First Name"
                      onChange={inputHandling}
                      value={firstName}
                      size="medium"
                      variant="outlined"
                      className={Classes.formCheckout}
                    /> */}
                    <TextField
                      id="outlined-name"
                      label="First Name"
                      value={firstName}
                      onChange={inputHandling}
                    />
                   
                  </Grid>
                  <Grid item xs="12" md="6" lg="6">
                    <TextFieldMUI
                      id="outlined-basic"
                      label="Last Name"
                      size="medium"
                      onChange={inputHandling}
                      value={lastName}
                      variant="outlined"
                      className={Classes.formCheckout}
                    />
                  </Grid>
                  <Grid item xs="12" md="6" lg="6">
                    <TextFieldMUI
                      id="outlined-basic"
                      label="Email"
                      size="medium"
                      onChange={inputHandling}
                      value={email}
                      variant="outlined"
                      className={Classes.formCheckout}
                    />
                  </Grid>
                  <Grid item xs="12" md="6" lg="6">
                    <TextFieldMUI
                      id="outlined-basic"
                      type="text"
                      label="Phone Number"
                      onChange={inputHandling}
                      value={phoneNumber}
                      size="medium"
                      variant="outlined"
                      className={Classes.formCheckout}
                    />
                  </Grid>
                  <Grid item xs="12" md="12" lg="12">
                    <TextFieldMUI
                      id="outlined-basic"
                      label="Street Address"
                      size="medium"
                      onChange={inputHandling}
                      value={address}
                      variant="outlined"
                      className={Classes.formCheckout}
                    />
                  </Grid>
                  <Grid item xs="12" md="12" lg="12">
                    <TextFieldMUI
                      type="textarea"
                      id="outlined-basic"
                      label="Note"
                      size="medium"
                      onChange={inputHandling}
                      value={note}
                      variant="outlined"
                      className={Classes.formCheckout}
                    />
                  </Grid>
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
                              ${checkoutItem.discountPrice ? checkoutItem.discountPrice : checkoutItem.price} X{" "}
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
                      <span>Total items ({totalItems})</span> <span>${itemsPrice}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Typography variant="h3">Shipping</Typography>
                  <div className={Classes.checkoutRightinfo}>

                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="shipping-free"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="shipping-free"
                          control={<Radio />}
                          label="Shipping Free"
                          className={Classes.checkoutRightRadio}
                        />
                        <FormControlLabel
                          value="shipping-fee"
                          control={<Radio />}
                          label="Shipping fee $20"
                          className={Classes.checkoutRightRadio}
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <ul>
                    <li>
                      <span>Total</span> <span>$698</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Typography variant="h3">Payment</Typography>
                  <div className={Classes.checkoutRightinfo}>

                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="stripe"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="stripe"
                          control={<Radio />}
                          label="Stripe"
                          className={Classes.checkoutRightRadio}
                        />
                        <FormControlLabel
                          value="cod"
                          control={<Radio />}
                          label="Cash on delivery"
                          className={Classes.checkoutRightRadio}
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className={Classes.cartRightbtnn}>
                  <Button className={Classes.cartRightbtn} variant="contained">
                    Place Order
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Checkout;
