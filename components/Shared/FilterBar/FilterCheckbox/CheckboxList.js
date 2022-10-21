import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import useRouterFilter from "../../../../hooks/useRouterFilter";

export default function CheckboxList({ options, type }) {
  const { addQueryParams } = useRouterFilter(type);
  return (
    <FormGroup>
      {options.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox size="small" onChange={addQueryParams} value={item} />
          }
          label={
            type === "filter_rating" ? (
              <Rating name="read-only" value={item} readOnly />
            ) : (
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.62)",
                  fontSize: "16px",
                  fontFamily: "Rubik",
                }}
              >
                {item}
              </Typography>
            )
          }
        />
      ))}
    </FormGroup>
  );
}
