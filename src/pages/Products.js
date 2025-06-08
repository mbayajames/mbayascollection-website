import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import SkeletonLoader from "../components/SkeletonLoader";
import "../styles/ProductsPage.css";

function Products() {
  const { products, loading } = useProducts();
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      !filter || product.category.toLowerCase() === filter.toLowerCase()
  );

  return (
    <motion.div
      className="products"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>All Products</h2>
        <div className="filter">
          <select
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter by category"
          >
            <option value="">All</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
            <option value="clothes">Clothes</option>
          </select>
        </div>
        <div className="products-grid">
          {loading
            ? Array(6)
                .fill()
                .map((_, i) => <SkeletonLoader key={i} />)
            : filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Products;
