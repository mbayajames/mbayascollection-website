import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/Analytics.css";

function Analytics() {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "admin") {
    return <p>Access denied. Admins only.</p>;
  }

  // Mocked analytics data
  const analyticsData = {
    totalSales: 12000,
    totalOrders: 150,
    totalUsers: 300,
  };

  return (
    <motion.div
      className="analytics"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Analytics</h2>
        <div className="analytics-grid">
          <div className="analytics-card">
            <h3>Total Sales</h3>
            <p>${analyticsData.totalSales}</p>
          </div>
          <div className="analytics-card">
            <h3>Total Orders</h3>
            <p>{analyticsData.totalOrders}</p>
          </div>
          <div className="analytics-card">
            <h3>Total Users</h3>
            <p>{analyticsData.totalUsers}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Analytics;
