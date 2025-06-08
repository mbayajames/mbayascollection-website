import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/LanguageSwitcher.css";

function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  const handleChange = (e) => {
    setLanguage(e.target.value);
    // Mocked: Update i18n language
    console.log(`Language changed to: ${e.target.value}`);
  };

  return (
    <motion.div
      className="language-switcher"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <select
        value={language}
        onChange={handleChange}
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="sw">Swahili</option>
      </select>
    </motion.div>
  );
}

export default LanguageSwitcher;
