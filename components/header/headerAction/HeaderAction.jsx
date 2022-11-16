import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { countTotalItems } from '../../../utils/cart';
import CartAction from '../../Shared/cartAction/cartAction';
import classes from './HeaderAction.module.css';

const HeaderAction = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();
  const open = Boolean(anchorEl);

  const cart = useStoreState((state) => state.cart.cart);
  
  const isAuthenticated = useStoreState((state) => state.auth.isAuthenticated);
  const authUser = useStoreState((state) => state.auth.user);

  const logout = useStoreActions((actions) => actions.auth.logout);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const wishlistPageHandler = () =>  {
    if (isAuthenticated) {
      router.push('/wishlist');
    } else {
      router.push('/login');
    }
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Box sx={{ display: { md: 'flex' } }}>
      <IconButton size="large" onClick={handleClick}>
        {isAuthenticated ? (
          <Avatar sx={{ backgroundColor: '#3c1ff4' }}>
            {authUser.username?.charAt(0)?.toUpperCase() || 'U'}
          </Avatar>
        ) : (
          <Person2OutlinedIcon className={classes.actionIcon} />
        )}
      </IconButton>
      
      <IconButton size="large" onClick={wishlistPageHandler}>
        <FavoriteBorderOutlinedIcon className={classes.actionIcon} />
      </IconButton>

        <CartAction />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {isAuthenticated ? (
          <div>
            <MenuItem
              onClick={() => {
                handleClose();
                router.push('/my-account');
              }}
            >
              My Account
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                logout();
              }}
            >
              Logout
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem
              onClick={() => {
                handleClose();
                router.push('/login');
              }}
            >
              Login
            </MenuItem>
          </div>
        )}
      </Menu>
    </Box>
  );
};
export default HeaderAction;
