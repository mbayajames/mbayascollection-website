import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { fetchProducts } from "../../utils/api";
import { formatCurrency } from "../../utils/formatters";
import "../../styles/ManageProducts.css";

function ManageProducts() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user && user.role === "admin") {
      fetchProducts().then(setProducts);
    }
  }, [user]);

  if (!user || user.role !== "admin") {
    return <p>Access denied. Admins only.</p>;
  }

  const handleDelete = (id) => {
    // Mocked delete
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <motion.div
      className="manage-products"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Manage Products</h2>
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{formatCurrency(product.price)}</td>
                <td>{product.category}</td>
                <td>
                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ManageProducts;
