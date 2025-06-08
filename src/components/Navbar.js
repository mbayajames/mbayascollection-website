import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { trackSearch } from "../utils/analytics";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../styles/Navbar.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    trackSearch(searchQuery);
    navigate(`/products?search=${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link to="/" className="logo">
          Mbaya's Collection
        </Link>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
          <button type="submit" aria-label="Search">
            <FaSearch />
          </button>
        </form>
        <div className="nav-links">
          <Link to="/cart" aria-label="Cart">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </Link>
          {user ? (
            <>
              <Link to="/profile" aria-label="Profile">
                <FaUser />
              </Link>
              <button onClick={logout} aria-label="Logout">
                <FaSignOutAlt />
              </button>
            </>
          ) : (
            <Link to="/login" aria-label="Login">
              <FaUser />
            </Link>
          )}
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
