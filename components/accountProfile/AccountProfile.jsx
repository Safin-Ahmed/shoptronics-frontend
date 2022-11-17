import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classes from './AccountProfile.module.css';

const AccountProfile = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();
  const open = Boolean(anchorEl);


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

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
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
export default AccountProfile;
