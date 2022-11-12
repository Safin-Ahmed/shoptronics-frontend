import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <CircularProgress
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: "999",
        background: "#3c1ff4",
        color: "transparent",
      }}
    />
  );
};

export default Loader;
