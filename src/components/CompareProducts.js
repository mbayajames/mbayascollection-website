import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { formatCurrency } from "../utils/formatters";
import "../styles/CompareProducts.css";

function CompareProducts({ products, onRemove }) {
  const [selectedProducts, setSelectedProducts] = useState(
    products.slice(0, 3)
  );

  const handleRemove = (id) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
    onRemove(id);
  };

  if (!selectedProducts.length) {
    return <p>No products selected for comparison.</p>;
  }

  return (
    <motion.div
      className="compare-products"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <table className="compare-table">
        <thead>
          <tr>
            <th></th>
            {selectedProducts.map((product) => (
              <th key={product.id}>
                {product.name}
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(product.id)}
                  aria-label={`Remove ${product.name}`}
                >
                  <FaTimes />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Image</td>
            {selectedProducts.map((product) => (
              <td key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="compare-image"
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>Price</td>
            {selectedProducts.map((product) => (
              <td key={product.id}>{formatCurrency(product.price)}</td>
            ))}
          </tr>
          <tr>
            <td>Category</td>
            {selectedProducts.map((product) => (
              <td key={product.id}>{product.category}</td>
            ))}
          </tr>
          <tr>
            <td>Description</td>
            {selectedProducts.map((product) => (
              <td key={product.id}>{product.description}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}

export default CompareProducts;
