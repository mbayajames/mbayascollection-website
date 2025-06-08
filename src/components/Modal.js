import React from "react";
import { motion } from "framer-motion";
import "../styles/Modal.css";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2>{title}</h2>
        {children}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
