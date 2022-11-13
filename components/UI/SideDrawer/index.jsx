import { Box } from "@mui/system";

import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { totalAndSubtotalCal } from "../../../utils/cart";
import SideCart from "../../sideCart/SideCart";
import classes from "./SideDrawer.module.css";

const SideDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const cartProducts = useStoreState((state) => state.cart.cart);
  const removeItem = useStoreActions((actions) => actions.cart.removeItem);
  const deleteItem = useStoreActions((actions) => actions.cart.deleteItem);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const subtotalCal = totalAndSubtotalCal(cartProducts, 0);
    setSubtotal(subtotalCal);
  }, [cartProducts]);

  const router = useRouter();

  const handleDelete = (id) => {
    deleteItem({ id });
  };

  const handleRoutes = (route) => {
    setDrawerOpen(false);
    router.push(route);
  };
  return (
    <div
      style={{
        width: 400,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          py: 2,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flexGrow: 1, fontSize: "22px", fontWeight: "900" }}>
          Shopping Cart
        </Box>
        <Box className={classes.close} onClick={() => setDrawerOpen(false)}>
          Close
          <Box className={classes.line}></Box>
        </Box>
      </Typography>
      <Divider />

      {cartProducts.length ? (
        <Box sx={{ overflowY: "auto" }}>
          {cartProducts.map((cart, index) => {
            return (
              <SideCart
                key={`${index} - ${cart.id}`}
                cart={cart}
                removeItem={handleDelete}
              />
            );
          })}
        </Box>
      ) : (
        <Typography sx={{ p: 6 }} variant={"h5"}>
          No products in the cart.
        </Typography>
      )}

      {cartProducts.length > 0 && <Divider sx={{ flexGrow: 1 }} />}
      {cartProducts.length > 0 && (
        <Box sx={{ px: 1, mb: 2 }}>
          <Typography
            variant="h6"
            sx={{ my: 1.5, mx: 3 }}
            className={classes.subtotal}
          >
            <Box>Subtotal: </Box>
            <Box>${subtotal}</Box>
          </Typography>
          <Button
            onClick={() => handleRoutes("/checkout")}
            variant="contained"
            fullWidth
            className={classes.checkout}
          >
            Checkout
          </Button>
          <Box sx={{ my: 2 }} />
          <Button
            variant="outlined"
            fullWidth
            className={classes.viewCart}
            onClick={() => handleRoutes("/cart")}
          >
            View cart
          </Button>
        </Box>
      )}
    </div>
  );
};
export default SideDrawer;
