import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";

export default function SearchInput({ searchTerm, setSearchTerm }) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <FormControl
        sx={{
          width: "100%",
          "&:hover": { borderBottom: "0px solid", outline: "none" },
        }}
        variant="standard"
      >
        <Input
          sx={{
            border: "1px solid rgba(53, 119, 240, 0.75)",
            paddingLeft: "0.5rem",
            outline: "none",
            "&:before": { borderBottom: "0px solid !important" },
            "&:after": {
              borderBottom: "1px solid  rgba(53, 119, 240, 0.75) !important",
            },
            "&:hover": {
              borderBottom: "0px solid",
              outline: "none",
              "&:not(.Mui-disabled)": {
                "&:before": {
                  outline: "none !important",
                  borderBottom:
                    "1px solid  rgba(53, 119, 240, 0.75) !important",
                },
              },
            },
          }}
          id="search"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
