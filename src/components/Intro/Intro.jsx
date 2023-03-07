import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion"

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <motion.div className="Intro" id="Intro"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* left name side */}
      <div className="i-left">
        <motion.div className="i-name"
          variants={fadeIn("right", "tween", 0.2, 1)}>
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Ashvin Bambhaniya</span>
          <span>
            Frontend Developer with good knowledge in web designing
            and development, producting the Quality work
          </span>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
        >
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
        </motion.div>
        {/* social icons */}
        <motion.div className="i-icons"
          variants={slideIn("up", "tween", 0.5, 1.3)}>
          <a target='_blank' rel="noreferrer" href="https://github.com/AshvinBambhaniya"><img src={Github} alt="" /></a>
          <img src={LinkedIn} alt="" />
          <a target='_blank' rel="noreferrer" href="https://www.instagram.com/ll__stylish_boy__ll/?utm_source=qr"><img src={Instagram} alt="" /></a>

        </motion.div>
      </div>
      {/* right image side */}
      <div className="i-right" >
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Computer Engineering" text2="Student" />

        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default Intro;
