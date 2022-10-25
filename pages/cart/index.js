import { Button,Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Product from '../../public/static/product-38.png'
import Product1 from '../../public/static/product-1.jpg'
import Product2 from '../../public/static/product-2.jpg'
import Product4 from '../../public/static/product-4.png'
import Product5 from '../../public/static/product-5.png'
import Classes from './Cart.module.css'
import Image from "next/image";
import CartItem from "../../components/cartItem/CartItem";
import BreadcrumbsCom from "../../components/breadcrumbs/BreadcrumbsCom";

const Cart = () => {
 const carts = [
  {
    productTitle : "GIGABYTE H110 Processor I5 6th GEN RAM ",
    productPrice : "$23.00",
    productImage : Product,
  },
  {
    productTitle : "Gaming PC Windows 10 64 Bit'Monitor 17 inch",
    productPrice : "$56.85",
    productImage : Product1,
  },
  {
    productTitle : "Intel Core Two Duo RAM 4GB HDD 500GB",
    productPrice : "$56.85",
    productImage : Product2,
  },
  {
    productTitle : "RAM 4GB HDD 500GB",
    productPrice : "$100.85",
    productImage : Product4,
  },
  {
    productTitle : "RAM 4GB HDD 500GB",
    productPrice : "$100.85",
    productImage : Product5,
  }
 ]

  return (
    <div>
      <BreadcrumbsCom sx={{zIndex:"-9"}} breadcrumbs= "Cart" />
      <Box>
        <Container>
        <Grid container columnGap={2} sx={{justifyContent:"space-around"}}>
          <Grid sx={{backgroundColor:"#fff",zIndex:"999", marginTop:"-30px",}} item  xs="12" md="8" lg="7" className={Classes.cartLeft} >
            {
              carts.map((cartItem,index)=>{
                return (
                  <CartItem key={index} cartItem={cartItem}/>
                );
              })
            }
          </Grid>
          
          <Grid item xs="12" md="4" lg="4" sx={{backgroundColor:"#fff",zIndex:"999", marginTop:"-30px",borderRadius:"3px"}}>
             <Box className={Classes.cartRight}>
                <Typography variant="h3">Order Summary</Typography>
                <ul>
                  <li><span>Subtotal (2 items)</span> <span>$698</span></li>
                  <li><span>Shipping Fee</span> <span>$20</span></li>
                </ul>
                <ul>
                  <li><span>Total</span> <span>$698</span></li>
                </ul>
                <div className={Classes.cartRightbtnn}>
                <Button className={Classes.cartRightbtn} variant="contained">Proceed to checkout</Button>
                </div>
             </Box>
          </Grid>
        </Grid>
         
        </Container>
      </Box>
    </div>
  );
};

export default Cart;
