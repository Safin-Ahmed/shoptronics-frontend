import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Drawer, IconButton } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { useState } from "react";
import { countTotalItems } from "../../../utils/cart";
import SideDrawer from "../../UI/SideDrawer";

const CartAction = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [componentDidMount, setComponentDidMount] = useState(false);
  const cart = useStoreState((state) => state.cart.cart);
  const totalCount = countTotalItems(cart);

  useEffect(() => {
    setComponentDidMount(true);
  }, []);

  if (!componentDidMount) {
    return null;
  }

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-haspopup="true"
        sx={{ ml: { xs: "8px", md: 0 } }}
        onClick={() => setDrawerOpen(true)}
      >
        <Badge badgeContent={totalCount} color="error">
          <ShoppingCartOutlinedIcon sx={{ color: "#433838" }} />
        </Badge>
      </IconButton>

      <Drawer
        open={drawerOpen}
        anchor={"right"}
        onClose={() => setDrawerOpen(false)}
      >
        <SideDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </>
  );
};
export default CartAction;
