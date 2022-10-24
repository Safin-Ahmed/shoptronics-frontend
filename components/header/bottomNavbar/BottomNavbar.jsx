import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import styles from './BottomNavbar.module.css';

const BottomNavbar = ({ handleMouseEnter, handleMouseLeave, isShow }) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <Box className={styles.bottomNavbar}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.category}
        >
          <FormatAlignLeftIcon />
          Departments
          <KeyboardArrowDownIcon
            className={styles.arrowIcon}
            style={{ transform: isShow ? 'rotate(-180deg)' : 'rotate(0deg)' }}
          />
        </div>
        <div className={styles.line}></div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="">Home</a>
            </li>
            <li className={styles.li}>
              <a href="">Shop</a>
            </li>
            <li className={styles.li}>
              <a href="">About</a>
            </li>
            <li className={styles.li}>
              <a href="">Contact</a>
            </li>
            <li className={styles.li}>
              <a href="">Account</a>
            </li>
          </ul>
        </nav>
      </Box>
    </Box>
  );
};
export default BottomNavbar;
