// import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputField from '../../shared/InputField/InputField';
import PrimaryLogo from '../../shared/primary-logo/PrimaryLogo';
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
          sx={{ mr: 2, color: '#000', display: {md: 'none'} }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ mt: 1, display: { xs: 'none', md: 'block' } }}>
          <PrimaryLogo width='200' height={30} alt="header-logo" />
        </Box>

        <InputField />
        <Box />
        <HeaderAction />
      </Toolbar>
    </Box>
  );
};
export default TopNavbar;
