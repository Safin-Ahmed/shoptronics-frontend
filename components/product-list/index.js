import React from "react";
import ProductCard from "../Shared/ProductCard";

const styles = {
    cardItem: {
        flex: "25%",
        marginTop: 20,
        overflow: "hidden"
    }
}

const ProductList = () => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
            <div style={styles.cardItem}>
                <ProductCard />
            </div>
        </div>
    );
};

export default ProductList;
