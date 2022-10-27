import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectInput = ({ label, options, handleChange, stateValue }) => {
  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={stateValue}
        onChange={handleChange}
        size="small"
      >
        {options.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
