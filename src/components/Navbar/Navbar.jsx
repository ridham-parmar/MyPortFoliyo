import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn, headerVariants, staggerContainer } from "../../utils/motion";


const Navbar = () => {

  return (
    <motion.div className="n-wrapper" id="Navbar"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      // className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* left */}
      <motion.div className="n-left"
        variants={fadeIn("down", "tween", 1, 1)}>
        <div className="n-name">Ashvin</div>
        <Toggle />
      </motion.div>
      {/* right */}
      <motion.div className="n-right"
        variants={fadeIn("down", "tween", 1, 1)}>
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link className="nav-font-bold" activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-font-bold" to="skiils" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link className="nav-font-bold" to="education" spy={true} smooth={true}>
                Education
              </Link>
            </li>
            <li>
              <Link className="nav-font-bold" to="languages" spy={true} smooth={true}>
                Languages
              </Link>
            </li>
            <li>
              <Link className="nav-font-bold" to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
