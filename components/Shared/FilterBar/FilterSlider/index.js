import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FilterHeading from "../../../UI/FilterHeading";
import useFilterSlider from "../../../../hooks/useFilterSlider";

export default function FilterSlider() {
  const { value, handleChange } = useFilterSlider(0, 500);
  return (
    <Box sx={{ my: 4 }}>
      <FilterHeading title="Price" />
      <Slider
        size="small"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={500}
        sx={{ color: "#3C1FF4" }}
      />
    </Box>
  );
}
