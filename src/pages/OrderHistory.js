import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { fetchUserProfile } from "../utils/api";
import { formatCurrency, formatDate } from "../utils/formatters";
// import '../styles/OrderHistory.css';

function OrderHistory() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetchUserProfile().then((profile) => setOrders(profile.orders || []));
    }
  }, [user]);

  if (!user) {
    return <p>Please log in to view your order history.</p>;
  }

  return (
    <motion.div
      className="order-history"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Your Order History</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{formatDate(order.date)}</td>
                  <td>{formatCurrency(order.total)}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </motion.div>
  );
}

export default OrderHistory;
