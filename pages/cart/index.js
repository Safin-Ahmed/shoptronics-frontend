import { Alert, Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useStoreState } from 'easy-peasy';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BreadcrumbsCom from '../../components/breadcrumbs/BreadcrumbsCom';
import CartItem from '../../components/cartItem/CartItem';
import { totalAndSubtotalCal } from '../../utils/cart';
import Classes from './Cart.module.css';


const SHIPPING_FEES = 20;


const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(SHIPPING_FEES);
  const cartProducts = useStoreState((state) => state.cart.cart);
  const route = useRouter();
  useEffect(() => {

    const subTotalCal = totalAndSubtotalCal(cartProducts, 0);
    setSubtotal(subTotalCal);

    const totalCal = totalAndSubtotalCal(cartProducts, SHIPPING_FEES);
    setTotal(totalCal);

  }, [cartProducts]);


  return (
    <div>
      <BreadcrumbsCom breadcrumbs="Cart" />
      <Box>
        <Container>
          <Grid container columnGap={2} sx={{ justifyContent: 'space-around' }}>
            <Grid
              sx={{
                backgroundColor: '#fff',
                zIndex: '999',
                marginTop: '-30px',
                height: cartProducts < 1 ? '30vh': '85vh',
                overflowY: 'auto'
              }}
              item
              xs="12"
              md="8"
              lg="7"
              className={Classes.cartLeft}
            >
              {cartProducts.length > 0 ? (
                cartProducts.map((cartItem, index) => {
                  return <CartItem key={index} cartItem={cartItem} />;
                })
              ) : (
                <Alert
                  sx={{
                    width: '500px',
                    m: '100px auto 0 ',
                    alignItems: 'center',
                  }}
                  severity="warning"
                >
                  <Typography variant="h5">Your Cart Is Empty</Typography>
                </Alert>
              )}
            </Grid>

            {cartProducts.length > 0 && (
              <Grid
                item
                xs="12"
                md="4"
                lg="4"
                sx={{
                  backgroundColor: '#fff',
                  zIndex: '999',
                  marginTop: '-30px',
                  borderRadius: '3px',
                }}
              >
                <Box className={Classes.cartRight}>
                  <Typography variant="h3">Order Summary</Typography>
                  <ul>
                    <li>
                      <span>Subtotal  ({cartProducts.length} items)</span> <span>${subtotal}</span>
                    </li>
                    <li>
                      <span>Shipping Fee</span> <span>${SHIPPING_FEES}</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>Total</span> <span>${total}</span>
                    </li>
                  </ul>
                  <div className={Classes.cartRightbtnn}>
                    <Button
                      className={Classes.cartRightbtn}
                      variant="contained"
                      onClick={() => route.push('/checkout')}
                    >
                      Proceed to checkout
                    </Button>
                  </div>
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Cart;
