import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import * as React from "react";
import FilterCollapse from "./FilterCollapse";

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
      }}
    >
      <CardContent>
        <FilterCollapse />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
