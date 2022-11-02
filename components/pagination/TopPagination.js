import { ArrowBackIos, ArrowForwardIos, ClearAll } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import usePagination from "../../hooks/usePagination";
import useSorting from "../../hooks/useSorting";
import GridListLine from "../../public/icons/GridListLine";
import GridViewLine from "../../public/icons/GridViewLine";
import styles from "../../public/Styles/topPagination.module.css";
import SelectInput from "../UI/SelectInput";

const TopPagination = ({ pagination, viewHandler }) => {
  const router = useRouter();
  const { page, pageCount } = pagination;
  const { getNextPage, getPrevPage } = usePagination({ page, pageCount });
  const { addSort, state } = useSorting();
  const handleClearFilter = () => {
    if (router.query) {
      router.push(
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
        <div>
          <Button
            onClick={handleClearFilter}
            variant="text"
            startIcon={<ClearAll />}
          >
            Clear All
          </Button>
        </div>
        <div style={{ marginRight: "15px" }}>
          <SelectInput
            label={"Sort by: "}
            options={[
              {
                label: "Default",
                value: "default",
              },
              {
                label: "Price Low To High",
                value: "price:asc",
              },
              {
                label: "Price High To Low",
                value: "price:desc",
              },
              {
                label: "ASC",
                value: "title:asc",
              },
              {
                label: "DESC",
                value: "title:desc",
              },
            ]}
            handleChange={addSort}
            stateValue={state.value}
          />
        </div>
        <span>View:</span>
        <a onClick={() => viewHandler("grid")} style={{ cursor: "pointer" }}>
          <GridViewLine />
        </a>
        <a onClick={() => viewHandler("list")} style={{ cursor: "pointer" }}>
          <GridListLine />
        </a>
      </div>
    </div>
  );
};

export default TopPagination;
