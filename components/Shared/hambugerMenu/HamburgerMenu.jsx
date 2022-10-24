import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

const HamburgerMenu = () => {
  return (
    <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="open drawer"
  >
    <MenuIcon />
  </IconButton>
  )
}
export default HamburgerMenu