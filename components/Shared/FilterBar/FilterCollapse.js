import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchInput from "../../UI/SearchInput";
import FilterCollapseList from "./FilterCollapseList";

export default function FilterCollapse() {
  return (
    <div>
      <Accordion sx={{ boxShadow: "none", marginBottom: "0px !important" }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                background: "rgba(244, 208, 190, 0.41);",
                borderRadius: "50%",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Computer</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: 0, pt: 0 }}>
          <SearchInput />
          <FilterCollapseList />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
