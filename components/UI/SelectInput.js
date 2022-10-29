import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectInput = ({
  options,
  handleChange,
  stateValue,
  name = "",
  onClick,
}) => {
  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={stateValue}
        onChange={handleChange}
        size="small"
        name={name}
        onClick={onClick || null}
      >
        {options?.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.label || item.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
