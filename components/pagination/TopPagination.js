import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import usePagination from "../../hooks/usePagination";
import GridListLine from "../../public/icons/GridListLine";
import GridViewLine from "../../public/icons/GridViewLine";
import styles from "../../public/Styles/topPagination.module.css";

const TopPagination = ({ pagination }) => {
  const { page, pageCount } = pagination;
  const { getNextPage, getPrevPage } = usePagination({ page, pageCount });
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
        <select>
          <option>High to Low</option>
          <option>Low to High</option>
          <option>ASC</option>
          <option>DESC</option>
        </select>
        <span>View:</span>
        <GridViewLine />
        <GridListLine />
      </div>
    </div>
  );
};

export default TopPagination;
