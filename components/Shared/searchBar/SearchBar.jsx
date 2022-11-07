import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./SearchBar.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "3px 0 0 3px",
  borderColor: "#3577F0 !important",
  padding: "5px 0",
  alignItems: "center",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    console.log(router);
    const newRouter = {
      pathName: "/shop",
      query: {
        search: searchTerm,
      },
    };

    router.push(newRouter);
    setSearchTerm("");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box>
        <Toolbar>
          <Box sx={{ display: "flex", flexGrow: 1, px: 10 }}>
            <Search sx={{ flexGrow: 1, border: 1 }}>
              <div className={classes.SearchIconWrapper}>
                <SearchIcon />
              </div>
              <StyledInputBase
                placeholder="Search…"
                type="text"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Search>
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                borderRadius: "0 3px 3px 0",
                boxShadow: 0,
                px: "36px",
                bgcolor: "#3C1FF4",
              }}
            >
              Search
            </Button>
          </Box>
          <Box />
        </Toolbar>
      </Box>
    </Box>
  );
};
export default SearchBar;
