import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FilterHeading from "../../../UI/FilterHeading";
import useFilterSlider from "../../../../hooks/useFilterSlider";
import { useRouter } from "next/router";
import { Stack, TextField } from "@mui/material";

export default function FilterSlider() {
  const [sliderValue, setSliderValue] = React.useState([0, 100]);
  const { value, handleChange } = useFilterSlider(sliderValue);
  const handleRange = (e) => {
    setSliderValue((prev) => {
      const index = e.target.name === "min" ? 0 : 1;
      const newValues = [...prev];
      newValues[index] = +e.target.value;

      return newValues;
    });
  };

  return (
    <Box sx={{ my: 4 }}>
      <FilterHeading title="Price" />
      <Slider
        size="small"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={sliderValue[0]}
        max={sliderValue[1]}
        sx={{ color: "#3C1FF4" }}
      />
      <Stack display="flex" direction="row" gap={25}>
        <TextField
          size="small"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          name="min"
          onChange={handleRange}
          value={sliderValue[0]}
        />
        <TextField
          size="small"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          name="max"
          onChange={handleRange}
          value={sliderValue[1]}
        />
      </Stack>
    </Box>
  );
}
