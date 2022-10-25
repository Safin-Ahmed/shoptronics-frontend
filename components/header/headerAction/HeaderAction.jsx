import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import classes from './HeaderAction.module.css';

const HeaderAction = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <IconButton size="large">
        <Person2OutlinedIcon className={classes.actionIcon} />
      </IconButton>
      <IconButton size="large">
        <FavoriteBorderOutlinedIcon className={classes.actionIcon} />
      </IconButton>
      <IconButton size="large" edge="end" aria-haspopup="true">
        <Badge badgeContent={17} color="error">
          <ShoppingCartOutlinedIcon className={classes.actionIcon} />
        </Badge>
      </IconButton>
    </Box>
  );
};
export default HeaderAction;
