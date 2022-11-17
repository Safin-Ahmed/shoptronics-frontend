import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, SwipeableDrawer } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import icon from "../../../public/static/bar-icon.svg";
import AccountProfile from "../../accountProfile/AccountProfile";
import BottomCategory from "./bottomCategory";

const BottomNav = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleWishlistRoutes = () => {
    router.push("/wishlist");
  };

  return (
    <Box sx={{ display: { md: "none" } }}>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          justifyContent: "space-around",
          boxShadow: "5px 5px 4px 5px rgb(208 202 202 / 90%)",
        }}
      >
        <IconButton onClick={handleOpen} sx={{ px: 2 }}>
          <Image width="20" height="20" src={icon} alt="bar-icon" />
        </IconButton>

        <IconButton sx={{ px: 2 }} onClick={handleWishlistRoutes}>
          <FavoriteIcon />
        </IconButton>

        <AccountProfile />
      </BottomNavigation>
      <SwipeableDrawer
        open={open}
        anchor="bottom"
        sx={{ zIndex: "899", width: "50%", display: { md: "none" } }}
      >
        <Box sx={{ width: "80%", m: "auto", height: "100vh" }}>
          <BottomCategory setOpen={setOpen} />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};
export default BottomNav;
