import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function CheckboxList({ options, type = "" }) {
  const handleCheck = (e) => {
    if (e.target.checked) {
      console.log(e.target.value, e.target.checked);
    }
  };
  return (
    <FormGroup>
      {options.map((item) => (
        <FormControlLabel
          key={item}
          control={<Checkbox size="small" onClick={handleCheck} value={item} />}
          label={
            type === "option" ? (
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.62)",
                  fontSize: "16px",
                  fontFamily: "Rubik",
                }}
              >
                {item}
              </Typography>
            ) : (
              <Image src={`./static/stars/${item}`} />
            )
          }
        />
      ))}
    </FormGroup>
  );
}
