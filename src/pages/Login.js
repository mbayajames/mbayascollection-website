import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { NotificationContext } from "../context/NotificationContext";
import { isValidEmail, isValidPassword } from "../utils/validators";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const { addNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      addNotification("Invalid email address.", "error");
      return;
    }
    if (!isValidPassword(password)) {
      addNotification("Password must be at least 8 characters.", "error");
      return;
    }
    // Mocked login
    login({ username: email.split("@")[0], email }, "mock-token");
    addNotification("Logged in successfully!", "success");
    navigate("/");
  };

  return (
    <motion.div
      className="login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            aria-label="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-label="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </motion.div>
  );
}

export default Login;
