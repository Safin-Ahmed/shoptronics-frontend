import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import BottomNavbar from './bottomNavbar/BottomNavbar';
import classes from './Header.module.css';
import TopNavbar from './topNavbar/TopNavbar';

const Header = ({ handleMouseEnter, handleMouseLeave, isShow }) => {
  return (
    <Box className={classes.header} sx={{ bgcolor: '#fff', py: 2, m: 'auto' }}>
      <Box sx={{width: '90%', m: 'auto'}}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{ boxShadow: '0', bgcolor: '#fff' }} position="static">
            <TopNavbar />
          </AppBar>
        </Box>
        <Box>
          <BottomNavbar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            isShow={isShow}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
