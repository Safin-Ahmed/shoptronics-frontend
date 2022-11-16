import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import CartAction from '../../Shared/cartAction/cartAction';
import PrimaryLogo from '../../shared/primary-logo/PrimaryLogo';
import SearchBar from '../../shared/searchBar/SearchBar';
import SideNavbar from '../../SideNavigation';
import HeaderAction from '../headerAction/HeaderAction';

const TopNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Toolbar sx={{p: {xs: 0}}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: '8px' , color: '#000', display: { md: 'none' } }}
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>
        <SideNavbar
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />

        <Box sx={{ mt: 1, display: { xs: 'none', md: 'block' }, mr: {md: '10px', lg: 0} }}>
          <PrimaryLogo width="200" height={30} alt="header-logo" />
        </Box>
        <SearchBar />
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
          <HeaderAction />
        </Box>
        <Box sx={{ display: { md: 'none' } }}>
          <CartAction />
        </Box>
      </Toolbar>
    </Box>
  );
};
export default TopNavbar;
