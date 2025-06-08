import React from "react";
import { motion } from "framer-motion";
import "../styles/ProductVideo.css";

function ProductVideo({ videoId }) {
  return (
    <motion.div
      className="product-video"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Product video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
}

export default ProductVideo;
