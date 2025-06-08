import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { fetchProductById } from "../utils/api";
import { formatCurrency } from "../utils/formatters";
import ProductVideo from "../components/ProductVideo";
// import '../styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useShoppingCart();

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <motion.div
      className="product-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="product-grid">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => addItem(product)}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
        {product.videoId && <ProductVideo videoId={product.videoId} />}
      </div>
    </motion.div>
  );
}

export default ProductDetail;
