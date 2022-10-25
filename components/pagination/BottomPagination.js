import Link from "next/link";
import React from "react";
import styles from '../../public/Styles/bottomPagination.module.css'



const BottomPagination = () => {
    return (
        <div className={styles.wrapper}>
            <Link href={"/shop"}>Prev</Link>
            <ul>
                <li><Link href={"/shop"}>1</Link></li>
                <li><Link href={"/shop"}>2</Link></li>
                <li><Link href={"/shop"}>3</Link></li>
                <li className={styles.active}><Link href={"/shop"}>4</Link></li>
                <li><Link href={"/shop"}>5</Link></li>
            </ul>
            <Link href={"/shop"}>Next</Link>
        </div>
    );
};

export default BottomPagination;
