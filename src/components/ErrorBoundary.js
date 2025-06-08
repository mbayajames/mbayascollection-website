import React, { Component } from "react";
import { NotificationContext } from "../context/NotificationContext";
import "../styles/ErrorBoundary.css";

class ErrorBoundary extends Component {
  static contextType = NotificationContext;

  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.context.addNotification(`Error: ${error.message}`, "error");
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message || "Please try again later."}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
