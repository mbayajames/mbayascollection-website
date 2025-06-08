import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../hooks/useShoppingCart";
import CouponInput from "../components/CouponInput";
import { formatCurrency } from "../utils/formatters";
import "../styles/CartPage.css";

function Cart() {
  const { cart, removeItem, updateItemQuantity, getTotal } = useShoppingCart();
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = (discountRate) => {
    setDiscount(getTotal() * discountRate);
  };

  return (
    <motion.div
      className="cart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>
            Your cart is empty. <Link to="/products">Shop now</Link>.
          </p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{formatCurrency(item.price)}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateItemQuantity(item.id, parseInt(e.target.value))
                        }
                        aria-label={`Quantity of ${item.name}`}
                      />
                    </td>
                    <td>{formatCurrency(item.price * item.quantity)}</td>
                    <td>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-summary">
              <CouponInput onApply={handleApplyCoupon} />
              <p>Subtotal: {formatCurrency(getTotal())}</p>
              <p>Discount: {formatCurrency(discount)}</p>
              <p>
                Total: <strong>{formatCurrency(getTotal() - discount)}</strong>
              </p>
              <Link to="/checkout" className="checkout-btn">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Cart;
