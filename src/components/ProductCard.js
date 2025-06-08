import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { NotificationContext } from "../context/NotificationContext";
import { trackProductClick } from "../utils/analytics";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const { addItem } = useShoppingCart();
  const { addNotification } = useContext(NotificationContext);

  const handleAddToWishlist = () => {
    // Mocked wishlist functionality
    addNotification(`${product.name} added to wishlist!`, "success");
  };

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={`/products/${product.id}`}
        onClick={() => trackProductClick(product.id)}
      >
        <img src={product.image} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="product-actions">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => addItem(product)}
          aria-label="Add to cart"
        >
          <FaShoppingCart /> Add to Cart
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleAddToWishlist}
          aria-label="Add to wishlist"
        >
          <FaHeart />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
