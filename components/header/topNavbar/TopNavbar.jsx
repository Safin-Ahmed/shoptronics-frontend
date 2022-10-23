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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '3px 0 0 3px',
  borderColor: '#3577F0 !important',
  padding: '5px 0',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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
