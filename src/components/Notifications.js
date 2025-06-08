import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NotificationContext } from "../context/NotificationContext";
import "../styles/Notifications.css";

function Notifications() {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div className="notifications">
      <AnimatePresence>
        {notifications.map(({ id, message, type }) => (
          <motion.div
            key={id}
            className={`notification notification-${type}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <p>{message}</p>
            <button
              onClick={() => removeNotification(id)}
              aria-label="Close notification"
            >
              ×
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Notifications;
