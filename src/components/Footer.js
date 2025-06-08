import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { NotificationContext } from "../context/NotificationContext";
import { sendNewsletterSubscription } from "../utils/emailService";
import "../styles/Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const { addNotification } = useContext(NotificationContext);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    sendNewsletterSubscription(email).then(() => {
      addNotification("Subscribed to newsletter!", "success");
      setEmail("");
    });
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Mbaya's Collection</h3>
            <p>Shop quality shoes, accessories, and clothes.</p>
          </div>
          <div>
            <h3>Links</h3>
            <ul>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/help">Help Center</a>
              </li>
              <li>
                <a href="/track-order">Track Order</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Newsletter</h3>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Newsletter email"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="copyright">
          © 2025 Mbaya's Collection. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
