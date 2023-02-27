import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/text_editer.png";
import Ecommerce from "../../img/Flipkart.png";
import HOC from "../../img/Food.png";
import MusicApp from "../../img/Spotify.png";
import { themeContext } from "../../Context";
import { staggerContainer, zoomIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const mobile = window.innerWidth <= 480 ? true : false;

  return (
    <motion.div className="portfolio" id="portfolio"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={mobile ? 1 : 3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <motion.img variants={zoomIn(0.1, 1)} src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <motion.img variants={zoomIn(0.1, 1)} src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <motion.img variants={zoomIn(0.1, 1)} src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <motion.img variants={zoomIn(0.1, 1)} src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Portfolio;
