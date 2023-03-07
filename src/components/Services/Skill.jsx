import React, { useContext, useState } from "react";
import "./Skiil.css";
import "./popup.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import { fadeIn, staggerContainer } from "../../utils/motion";
import FrontModal from "./FrontModal";
import BackendModal from "./BackendModal";
import OtherModal from "./OtherModal";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  const [showFront, setShowFront] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const handleClose = () => {
    setShowFront(false);
    setShowBackend(false)
    setShowOther(false)
  }
  const handleShowF = () => setShowFront(true);
  const handleShowB = () => setShowBackend(true);
  const handleShowO = () => setShowOther(true);

  return (
    <motion.div className="skiils" id="skiils"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >

      {/* The Modal */}
      {showFront && <motion.div id="frontModal" className="modal"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <FrontModal close={handleClose} />
      </motion.div>}
      {showBackend && <motion.div id="frontModal" className="modal"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <BackendModal close={handleClose} />
      </motion.div>}
      {showOther && <motion.div id="frontModal" className="modal"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <OtherModal close={handleClose} />
      </motion.div>}
      {/* left side */}
      <motion.div className="awesome"
        variants={fadeIn("right", "tween", 0.2, 1)}
      >
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span>
          My Js and React knowledge is good and I create Website using React Library
          <br />
          Also quite good in HTML, CSS and BootStrap.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </motion.div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend"}
            detail={"React Library, JavaScript, Html, Css, Bootstrap Framework"}
            popup={handleShowF}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend "}
            detail={" Nodejs Framework, Express,JavaScript, Mongodb"}
            popup={handleShowB}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Other"}
            detail={"Data Structure, OOPs Concept, SQL CRUD Query, GitHub command"}
            color="rgba(252, 166, 31, 0.45)"
            popup={handleShowO}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </motion.div>
  );
};

export default Services;
