import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { ClearAll, FilterList } from "@mui/icons-material";
import FilterBar from "../FilterBar";
import { useRouter } from "next/router";

export default function FilterDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const router = useRouter();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClearFilter = () => {
    if (router.query) {
      router.replace(
        {
          query: {},
        },
        undefined,
        {
          shallow: false,
        }
      );
    }
  };

  return (
    <React.Fragment>
      <Button
        onClick={toggleDrawer("right", true)}
        variant="text"
        startIcon={<FilterList />}
      >
        Filter
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
        <div style={{ padding: "1rem 1rem" }}>
          <Button
            onClick={handleClearFilter}
            variant="text"
            startIcon={<ClearAll />}
          >
            Clear All
          </Button>
        </div>
        <FilterBar />
      </Drawer>
    </React.Fragment>
  );
}
