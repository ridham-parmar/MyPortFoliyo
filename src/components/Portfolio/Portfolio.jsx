import React, { useContext, useState } from "react";
import "./Portfolio.css";
import "swiper/css";
import { themeContext } from "../../Context";
import { staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import SliderBackend from "./SliderBackend";
import SliderFront from "./SliderFront";
import { useEffect } from "react";
import SliderPortfolio from "./SliderPortfolio";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [FullStack, setFullStack] = useState({})
  const [Frontend, setFrontend] = useState({ display: "none" })
  const [AllProject, setAllProject] = useState({ display: "none" })

  const Backend = () => {
    let nullStyle = {
      display: "none"
    }
    let customStyle = {
      display: "flex"
    }
    setFullStack(customStyle)
    setFrontend(nullStyle)
    setAllProject(nullStyle)
  }
  const Front = () => {
    let nullStyle = {
      display: "none"
    }
    let customStyle = {
      display: "flex"
    }
    setFullStack(nullStyle)
    setFrontend(customStyle)
    setAllProject(nullStyle)
  }
  const PortFolios = () => {
    let nullStyle = {
      display: "none"
    }
    let customStyle = {
      display: "flex"
    }
    setFullStack(nullStyle)
    setFrontend(nullStyle)
    setAllProject(customStyle)
  }

  const [Portfolio, setPortfolio] = useState('Portfolio');

  useEffect(() => {
    if (Portfolio === "Portfolio") {
      PortFolios();
    } else if (Portfolio === "FrontEnd") {
      Front();
    } else if (Portfolio === "FullStack") {
      Backend();
    }
  }, [Portfolio])


  return (
    <>
      <div id="portfolio">
        <motion.div className="portfolio"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          style={FullStack}>
          {/* heading */}
          <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
          <div className="portfolio_select">
            <select style={{ backgroundColor: darkMode ? '#212426' : 'white' }} name="" id="" value={Portfolio} onChange={((e) => { setPortfolio(e.target.value) })}>
              <option value="Portfolio">Portfolio</option>
              <option value="FullStack">FullStack</option>
              <option value="FrontEnd">FrontEnd</option>
            </select>
          </div>
          <SliderBackend />
        </motion.div>

        <motion.div className="portfolio"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          style={Frontend}>
          {/* heading */}
          <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
          <div className="portfolio_select">
            <select style={{ backgroundColor: darkMode ? '#212426' : 'white' }} name="" id="" value={Portfolio} onChange={((e) => { setPortfolio(e.target.value) })}>
              <option value="Portfolio">Portfolio</option>
              <option value="FullStack">FullStack</option>
              <option value="FrontEnd">FrontEnd</option>
            </select>
          </div>
          {/* slider */}
          <SliderFront />
        </motion.div>

        <motion.div className="portfolio"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          style={AllProject}>
          {/* heading */}
          <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
          <div className="portfolio_select">
            <select style={{ backgroundColor: darkMode? '#212426': 'white' }} name="" id="" value={Portfolio} onChange={((e) => { setPortfolio(e.target.value) })}>
              <option value="Portfolio">Portfolio</option>
              <option value="FullStack">FullStack</option>
              <option value="FrontEnd">FrontEnd</option>
            </select>
          </div>
          <SliderPortfolio />
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
