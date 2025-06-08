import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import SkeletonLoader from "../components/SkeletonLoader";
import "../styles/HomePage.css";

function Home() {
  const { products, loading } = useProducts();

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero">
        <h1>Welcome to Mbaya's Collection</h1>
        <Link to="/products" className="shop-now">
          Shop Now
        </Link>
      </div>
      <div className="container">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {loading
            ? Array(3)
                .fill()
                .map((_, i) => <SkeletonLoader key={i} />)
            : products
                .slice(0, 3)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
