import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import usePagination from "../../hooks/usePagination";
import styles from "../../public/Styles/bottomPagination.module.css";

const BottomPagination = ({ pagination }) => {
  const { page, pageCount } = pagination;
  const { getNextPage, getPrevPage, getPage } = usePagination({
    page,
    pageCount,
  });
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.wrapper}>
      <a onClick={getPrevPage}>Prev</a>
      <ul>
        {pages.map((item) => (
          <li key={item} className={page === item ? `${styles.active}` : ""}>
            <a onClick={() => getPage(item)}>{item}</a>
          </li>
        ))}
      </ul>
      <a onClick={getNextPage}>Next</a>
    </div>
  );
};

export default BottomPagination;
