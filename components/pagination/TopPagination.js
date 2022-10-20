import Link from "next/link";
import React from "react";
import GridListLine from "../../public/icons/GridListLine";
import GridViewLine from "../../public/icons/GridViewLine";
import styles from '../../public/Styles/topPagination.module.css'



const TopPagination = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftside}>1/4<Link href={'/shop'}>{">"}</Link></div>
            <div className={styles.rightside}>
                <span>Short by: </span>
                <select>
                    <option>High to Low</option>
                    <option>Low to High</option>
                </select>
                <span>View:</span>
                <GridViewLine />
                <GridListLine />
            </div>
        </div>
    );
};

export default TopPagination;
