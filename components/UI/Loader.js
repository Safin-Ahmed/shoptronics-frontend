import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        background: "#ffffff87",
        zIndex: 999999,
        width: "100%",
        height: "100%",
      }}
    >
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: "999999",
          background: "#3c1ff4",
          color: "transparent",
        }}
      />
    </Box>
  );
};

export default Loader;
