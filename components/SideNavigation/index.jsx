import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PrimaryLogo from '../shared/primary-logo/PrimaryLogo';
import SearchBar from '../shared/searchBar/SearchBar';


const menuItem = [
  { id: 1, navItem: 'Home', navLink: '/' },
  { id: 2, navItem: 'Shop', navLink: '/shop' },
  { id: 3, navItem: 'About', navLink: '/about' },
  { id: 4, navItem: 'Contact', navLink: '/contact' },
  { id: 5, navItem: 'Account', navLink: '/account' },
];

const SideNavbar = ({ open, handleOpen, handleClose }) => {
  const list = (
    <Box sx={{ width: '300px' }} role="presentation">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
          mb: 2,
          px: 1,
          cursor: 'pointer',
        }}
        onClick={handleClose}
      >
        <PrimaryLogo width={100} height={20} />
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{px: 1}}><SearchBar/></Box>
      <List>
        {menuItem.map(({ navItem, navLink, id }) => (
          <Box key={id}>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  style={{ textDecoration: 'none', color: '#433838' }}
                  href={navLink}
                >
                  {navItem}
                </Link>
              </ListItemButton>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <SwipeableDrawer
          sx={{ display: { md: 'none' } }}
          anchor={'left'}
          open={open}
          onClose={handleClose}
        >
 
          {list}
        </SwipeableDrawer>
      </>
    </div>
  );
};

export default SideNavbar;
