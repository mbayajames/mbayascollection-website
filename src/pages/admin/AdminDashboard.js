import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/AdminDashboard.css";

function AdminDashboard() {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "admin") {
    return <p>Access denied. Admins only.</p>;
  }

  return (
    <motion.div
      className="admin-dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Admin Dashboard</h2>
        <div className="dashboard-grid">
          <Link to="/admin/products" className="dashboard-card">
            <h3>Manage Products</h3>
            <p>Add, edit, or delete products.</p>
          </Link>
          <Link to="/admin/orders" className="dashboard-card">
            <h3>Manage Orders</h3>
            <p>View and update order statuses.</p>
          </Link>
          <Link to="/admin/users" className="dashboard-card">
            <h3>Manage Users</h3>
            <p>View and manage user accounts.</p>
          </Link>
          <Link to="/admin/analytics" className="dashboard-card">
            <h3>Analytics</h3>
            <p>View sales and user insights.</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default AdminDashboard;
