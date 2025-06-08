import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { NotificationContext } from "../context/NotificationContext";
import { formatCurrency } from "../utils/formatters";
import { isValidPhone } from "../utils/validators";
import { sendOrderConfirmationEmail } from "../utils/emailService";
import "../styles/Checkout.css";

function Checkout() {
  const [phone, setPhone] = useState("");
  const { cart, getTotal, clearCart } = useShoppingCart();
  const { addNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const handleMpesaPayment = async () => {
    if (!isValidPhone(phone)) {
      addNotification("Invalid phone number.", "error");
      return;
    }

    try {
      // Mocked M-Pesa STK Push
      const response = await fetch("/api/mpesa/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          amount: Math.round(getTotal()),
        }),
      });
      if (!response.ok) throw new Error("Payment initiation failed");
      addNotification(
        "M-Pesa STK push sent to your phone. Please complete payment.",
        "info"
      );
      setTimeout(() => {
        // Simulate payment confirmation
        const order = {
          id: Date.now().toString(),
          items: cart,
          total: getTotal(),
        };
        sendOrderConfirmationEmail(order);
        clearCart();
        navigate("/order-history");
        addNotification("Order placed successfully!", "success");
      }, 2000);
    } catch (error) {
      addNotification("Payment failed. Try again.", "error");
    }
  };

  return (
    <motion.div
      className="checkout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Checkout</h2>
        <div className="checkout-details">
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map((item) => (
              <p key={item.id}>
                {item.name} x {item.quantity}:{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            ))}
            <p>
              <strong>Total: {formatCurrency(getTotal())}</strong>
            </p>
          </div>
          <div className="payment-form">
            <h3>M-Pesa Payment</h3>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter M-Pesa phone (e.g., +2547xxxxxxxx)"
              aria-label="Phone number"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleMpesaPayment}
              aria-label="Pay with M-Pesa"
            >
              Pay with M-Pesa
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Checkout;
