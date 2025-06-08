import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import '../styles/NotFound.css';

function NotFound() {
  return (
    <motion.div
      className="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="home-link">
          Return to Home
        </Link>
      </div>
    </motion.div>
  );
}

export default NotFound;
