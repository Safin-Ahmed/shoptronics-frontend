import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { Button, Typography } from "@mui/material";

export default function FilterCollapseList() {
  return (
    <List sx={{ width: "95%", margin: "auto", bgcolor: "background.paper" }}>
      {[1, 2, 3].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={<Typography>30</Typography>}
        >
          <ListItemText>
            <Button
              variant="text"
              sx={{
                color: "#000",
                "&:hover": { background: "none", textDecoration: "underline" },
              }}
            >{`Option ${value}`}</Button>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
