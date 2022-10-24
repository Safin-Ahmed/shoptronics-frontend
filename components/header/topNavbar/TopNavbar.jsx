// import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import PrimaryLogo from '../../shared/primary-logo/PrimaryLogo';
import SearchBar from '../../shared/searchBar/SearchBar';
import HeaderAction from '../headerAction/HeaderAction';

const TopNavbar = () => {
  return (
    <Box>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, color: '#000', display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ mt: 1, display: { xs: 'none', md: 'block' } }}>
          <PrimaryLogo width="200" height={30} alt="header-logo" />
        </Box>

        <SearchBar />
        <Box />
        <HeaderAction />
      </Toolbar>
    </Box>
  );
};
export default TopNavbar;
