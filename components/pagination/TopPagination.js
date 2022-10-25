import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import usePagination from "../../hooks/usePagination";
import useSorting from "../../hooks/useSorting";
import GridListLine from "../../public/icons/GridListLine";
import GridViewLine from "../../public/icons/GridViewLine";
import styles from "../../public/Styles/topPagination.module.css";

const TopPagination = ({ pagination }) => {
  const { page, pageCount } = pagination;
  const { getNextPage, getPrevPage } = usePagination({ page, pageCount });
  const { addSort, state } = useSorting();
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftside}>
        <Button
          onClick={getPrevPage}
          size="small"
          variant="text"
          sx={{
            p: 0,
            justifyContent: "flex-start",
            color: "#000",
            minWidth: 0,
            mr: 1,
            "&:hover": { background: "none" },
          }}
        >
          <ArrowBackIos sx={{ fontSize: "16px" }} />
        </Button>
        {page}/{pageCount}
        {page < pageCount && (
          <Button
            onClick={getNextPage}
            size="small"
            variant="text"
            sx={{
              p: 0,
              justifyContent: "flex-start",
              ml: 1,
              color: "#000",
              "&:hover": { background: "none" },
            }}
          >
            <ArrowForwardIos sx={{ fontSize: "16px" }} />
          </Button>
        )}
      </div>
      <div className={styles.rightside}>
        <span>Sort by: </span>
        <select onChange={addSort} value={state.value}>
          <option value={"default"}>Default</option>
          <option value={"price:asc"}>Low to High</option>
          <option value={"price:desc"}>High to Low</option>
          <option value={"title:asc"}>ASC</option>
          <option value={"title:desc"}>DESC</option>
        </select>
        <span>View:</span>
        <a style={{ cursor: "pointer" }}>
          <GridViewLine />
        </a>
        <a style={{ cursor: "pointer" }}>
          <GridListLine />
        </a>
      </div>
    </div>
  );
};

export default TopPagination;
