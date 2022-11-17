import { Box, Card, CardContent } from "@mui/material";
import * as React from "react";
import FilterCategories from "./FilterCategories";
import FilterCheckboxes from "./FilterCheckboxes";
import FilterSlider from "./FilterSlider";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function FilterBar() {
  return (
    <Card
      sx={{
        maxWidth: 375,
        boxShadow: "1px 3px 14px 1px rgba(0, 0, 0, 0.2)",
        borderRadius: "3px",
        px: 1,
        py: 2,
        marginTop: "-47%",
      }}
    >
      <CardContent>
        <FilterCategories />
        <FilterSlider />
        <FilterCheckboxes />
      </CardContent>
    </Card>
  );
}
