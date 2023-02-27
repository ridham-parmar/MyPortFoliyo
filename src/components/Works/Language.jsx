import React, { useContext } from "react";
import "./Language.css";
import C from "../../img/c.png";
import Java from "../../img/java.png";
import React_logo from "../../img/logo192.png";
import JS from "../../img/JS.png";
import Python from "../../img/Python.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
import { fadeIn, staggerContainer } from "../../utils/motion";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <motion.div className="lang" id="languages"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>
      {/* left side */}
      <motion.div className="w-left"
        variants={fadeIn("right", "tween", 0.2, 1)}>
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Code in All these
          </span>
          <span>Programming Languages</span>
          <span>
            In C and Python learn only basic and core Programming syntax and concept
            <br />
            Good Knowledge in Java such as learn oops concept and DataStructures in java.
            <br />
            JavaScript is my main and favorite language for Web Devlopment.
            <br />
            I use React js for FrontEnd Devlopment
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </motion.div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 90 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={C} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Java} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={React_logo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={JS} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Python} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </motion.div>
  );
};

export default Works;
