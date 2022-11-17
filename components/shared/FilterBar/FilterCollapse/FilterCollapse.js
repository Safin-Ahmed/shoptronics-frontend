import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchInput from "../../../UI/SearchInput";
import FilterCollapseList from "./FilterCollapseList";
import { useState } from "react";

export default function FilterCollapse({ title, options }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded((prev) => !prev)}
      sx={{ boxShadow: "none", marginBottom: "0px !important" }}
    >
      <AccordionSummary
        sx={{ p: 0 }}
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
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.62)",
            fontSize: "16px",
            fontFamily: "Rubik",
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ my: 0, py: 0, px: 0 }}>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterCollapseList
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          options={options}
          title={title}
          setExpanded={setExpanded}
        />
      </AccordionDetails>
    </Accordion>
  );
}
