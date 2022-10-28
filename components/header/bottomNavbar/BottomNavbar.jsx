import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";
import Link from "next/link";
import styles from "./BottomNavbar.module.css";

const BottomNavbar = ({ handleMouseEnter, handleMouseLeave, isShow }) => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
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
            style={{ transform: isShow ? "rotate(-180deg)" : "rotate(0deg)" }}
          />
        </div>
        <div className={styles.line}></div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.li}>
              <Link href="/shop">Shop</Link>
            </li>
            <li className={styles.li}>
              <Link href={"/about"}>About</Link>
            </li>
            <li className={styles.li}>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className={styles.li}>
              <Link href={"/account"}>Account</Link>
            </li>
          </ul>
        </nav>
      </Box>
    </Box>
  );
};
export default BottomNavbar;
