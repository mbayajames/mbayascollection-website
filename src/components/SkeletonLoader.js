import React from "react";
import "../styles/SkeletonLoader.css";

function SkeletonLoader() {
  return (
    <div className="skeleton-loader">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text short"></div>
      <div className="skeleton skeleton-button"></div>
    </div>
  );
}

export default SkeletonLoader;
