import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/CouponInput.css";

function CouponInput({ onApply }) {
  const [couponCode, setCouponCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (couponCode.trim()) {
      // Mocked coupon validation
      const discountRate = couponCode.toUpperCase() === "SAVE10" ? 0.1 : 0;
      onApply(discountRate);
      setCouponCode("");
    }
  };

  return (
    <motion.form
      className="coupon-input"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
        aria-label="Coupon code"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply
      </motion.button>
    </motion.form>
  );
}

export default CouponInput;
