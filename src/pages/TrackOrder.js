import React, { useState } from "react";
import { motion } from "framer-motion";
import { fetchOrderById } from "../utils/api";
import { formatCurrency, formatDate } from "../utils/formatters";
import "../styles/TrackOrder.css";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (orderId) {
      const data = await fetchOrderById(orderId);
      setOrder(data);
    }
  };

  return (
    <motion.div
      className="track-order"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Track Your Order</h2>
        <form onSubmit={handleTrack}>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID"
            aria-label="Order ID"
          />
          <button type="submit">Track</button>
        </form>
        {order && (
          <div className="order-details">
            <p>Order ID: {order.id}</p>
            <p>Date: {formatDate(order.date)}</p>
            <p>Total: {formatCurrency(order.total)}</p>
            <p>Status: {order.status}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default TrackOrder;
