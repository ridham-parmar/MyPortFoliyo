import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { staggerContainer, zoomIn } from "../../utils/motion";
import { motion } from "framer-motion";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <motion.div className="experience" id='experience'
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div className="achievement"
        variants={zoomIn(0.8, 0.4)}
      >
        {/* darkMode */}
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>8+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>years </span>
        <span>Experience</span>
      </motion.div>
      <motion.div className="achievement"
        variants={zoomIn(0.8, 0.4)}
      >
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>20+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>completed </span>
        <span>Projects</span>
      </motion.div>
      <motion.div className="achievement"
        variants={zoomIn(0.8, 0.4)}
      >
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>5+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>companies </span>
        <span>Work</span>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
