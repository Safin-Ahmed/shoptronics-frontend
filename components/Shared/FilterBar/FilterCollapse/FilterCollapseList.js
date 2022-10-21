import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button, Typography } from "@mui/material";

import useFilterCollapseList from "../../../../hooks/useFilterCollapseList";
import { formatString } from "../../../../utils/string";

export default function FilterCollapseList({
  options,
  searchTerm,
  setSearchTerm,
}) {
  const { finalOptionsList, handleViewAll, handleQuery, queries } =
    useFilterCollapseList(
      options,
      searchTerm,
      setSearchTerm,
      "filter_category"
    );

  return (
    <List sx={{ width: "95%", margin: "auto", bgcolor: "background.paper" }}>
      <ListItem
        sx={{ py: 0, my: 0 }}
        disableGutters
        secondaryAction={
          <Typography sx={{ fontSize: "14px", fontFamily: "Rubik" }}>
            30
          </Typography>
        }
      >
        <ListItemText>
          <Button
            variant="text"
            onClick={handleViewAll}
            sx={{
              color: "rgba(0, 0, 0, 0.8)",
              p: 0,
              justifyContent: "flex-start",
              fontSize: "14px",
              fontFamily: "Rubik",
              "&:hover": { background: "none", textDecoration: "underline" },
            }}
          >{`View All`}</Button>
        </ListItemText>
      </ListItem>
      {finalOptionsList.map((value) => (
        <ListItem
          sx={{ py: 0, my: 0 }}
          key={value}
          disableGutters
          secondaryAction={
            <Typography sx={{ fontSize: "14px", fontFamily: "Rubik" }}>
              30
            </Typography>
          }
        >
          <ListItemText>
            <Button
              variant="text"
              onClick={() => handleQuery({ param: "category", id: value })}
              sx={{
                color: "rgba(0, 0, 0, 0.8)",
                p: 0,
                justifyContent: "flex-start",
                fontSize: "14px",
                fontFamily: "Rubik",
                textDecoration: queries?.includes(formatString(value))
                  ? "underline"
                  : "",
                "&:hover": { background: "none", textDecoration: "underline" },
              }}
            >{`${value}`}</Button>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
