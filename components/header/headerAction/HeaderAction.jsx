import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Drawer, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./HeaderAction.module.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import { countTotalItems } from "../../../utils/cart";
import { Fragment, useEffect, useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from "next/router";
import Avatar from '@mui/material/Avatar';
import SideDrawer from "../../UI/SideDrawer";



const HeaderAction = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const cart = useStoreState((state) => state.cart.cart);
  const totalCount = countTotalItems(cart);
  const isAuthenticated = useStoreState((state) => state.auth.isAuthenticated);
  const authUser = useStoreState((state) => state.auth.user);

  const logout = useStoreActions((actions) => actions.auth.logout);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <IconButton size="large" onClick={handleClick}>
        {isAuthenticated ? (
          <Avatar sx={{ backgroundColor: '#3c1ff4' }}>
            {authUser.username?.charAt(0)?.toUpperCase() || 'U'}
          </Avatar>
        ) : (
          <Person2OutlinedIcon className={classes.actionIcon} />
        )}
      </IconButton>
      <IconButton size="large">
        <FavoriteBorderOutlinedIcon className={classes.actionIcon} />
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-haspopup="true"
        onClick={() => setDrawerOpen(true)}
      >
        <Badge badgeContent={totalCount} color="error">
          <ShoppingCartOutlinedIcon className={classes.actionIcon} />
        </Badge>
      </IconButton>

      <Drawer
        open={drawerOpen}
        anchor={'right'}
        onClose={() => setDrawerOpen(false)}
      >
        <SideDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </Drawer>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {isAuthenticated ? <div>
          <MenuItem onClick={() => {
            handleClose();
            router.push('/my-account');
          }}>My Account</MenuItem>
          <MenuItem onClick={() => {
            handleClose()
            logout()
          }}>Logout</MenuItem>
        </div> : <div>
          <MenuItem onClick={() => {
            handleClose();
            router.push('/login');
          }}>Login</MenuItem>
        </div>}
      </Menu>
    </Box>
  );
};
export default HeaderAction;
