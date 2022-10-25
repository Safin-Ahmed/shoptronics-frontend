import { Typography } from "@mui/material";
import React from "react";

const FilterHeading = ({ title }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "Rubik",
        fontSize: "19px",
        fontWeight: "700",
        color: "rgba(0, 0, 0, 0.76)",
        mb: 1,
      }}
    >
      {title}
    </Typography>
  );
};

export default FilterHeading;
