import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import useSelect from "../../hooks/useSelect";

const VariantSelect = ({ options, setChosenAttributes, name }) => {
  console.log(`Options for ${name} in Variant Select`, { options });
  const { state, handleChange, handleClick } = useSelect(options?.[0]?.value);
  useEffect(() => {
    setChosenAttributes((prev) => ({
      ...prev,
      [name]: state,
    }));
  }, [state]);
  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state}
        onChange={handleChange}
        size="small"
        onClick={handleClick || null}
        name={name}
        sx={{ width: "auto" }}
      >
        {options?.map((item, i) => (
          <MenuItem
            key={`${name} - ${item.attributeId} - ${i}`}
            value={item.value}
          >
            {item.label || item.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default VariantSelect;
