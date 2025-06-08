import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { NotificationContext } from "../context/NotificationContext";
import ProductCard from "../components/ProductCard";
import "../styles/WishlistPage.css";

function Wishlist() {
  const { user } = useContext(AuthContext);
  const { addNotification } = useContext(NotificationContext);
  const [wishlist, setWishlist] = useState([]); // Mocked wishlist

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    addNotification("Item removed from wishlist.", "info");
  };

  if (!user) {
    return <p>Please log in to view your wishlist.</p>;
  }

  return (
    <motion.div
      className="wishlist"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((product) => (
              <div key={product.id} className="wishlist-item">
                <ProductCard product={product} />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="remove-btn"
                >
                  Remove
                </motion.button>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Wishlist;
