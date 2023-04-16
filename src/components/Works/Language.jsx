import React, { useContext } from "react";
import "./Language.css";
import C from "../../img/c.png";
import Java from "../../img/java.png";
import React_logo from "../../img/logo192.png";
import JS from "../../img/JS.png";
import Python from "../../img/Python.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
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
          <span id="lan-header-1" style={{ color: darkMode ? "white" : "" }}>
            Code in All these
          </span>
          <span>Languages</span>
          <span>
            My main and I love to use React js library for FrontEnd Devlopment
            <br />
            JavaScript is my main and favorite language for Web Devlopment.
            <br />
            Good Knowledge in Java such as learn oops concept and DataStructures in java.
            <br />
            In C and Python learn only basic and core Programming syntax and concept
          </span>
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/drive/folders/13gp9XIOzQwNcj4f0v85yxhPqt-EIfqQg?usp=share_link"><button className="button s-button">Certificates</button></a>
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
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/11JY4TjeyUV5akVkZoQvEkKWPmwfLGXsJ/view?usp=share_link">
            <div className="w-secCircle">
              <img src={C} alt="" />
            </div>
          </a>
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1GnZ554xpTja-pneO_2C8BumboG0cYcj_/view?usp=share_link">
            <div className="w-secCircle">
              <img src={Java} alt="" />
            </div>
          </a>
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1GbWC1lLLIoVWnWBnXNDitYit6KOYY5KL/view?usp=share_link">
            <div className="w-secCircle">
              <img src={React_logo} alt="" />
            </div>
          </a>
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1nkHrB0APbt0G7bWcCp4y7XkfY-hLsGDW/view?usp=share_link">
            <div className="w-secCircle">
              <img src={JS} alt="" />
            </div>
          </a>
          <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1XY2AU7Nv9gSwi5mpjbOdM4yYNkQGj0ew/view?usp=share_link">
            <div className="w-secCircle">
              <img src={Python} alt="" />
            </div>
          </a>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </motion.div>
  );
};

export default Works;
