import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import NoteBook from "../../img/NoteBook.png";
import TextEditer from "../../img/text_editer.png";
import Ecommerce from "../../img/Flipkart.png";
import Food from "../../img/Food.png";
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
          <a target='_blank' rel="noreferrer" href="https://stylish-notebook.netlify.app"><motion.img variants={zoomIn(0.1, 1)} src={NoteBook} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a target='_blank' rel="noreferrer" href="https://stylish-text-editer.netlify.app"><motion.img variants={zoomIn(0.1, 1)} src={TextEditer} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a target='_blank' rel="noreferrer" href="https://github.com/AshvinBambhaniya/MyOnlineShoppingWebsite"><motion.img variants={zoomIn(0.1, 1)} src={Ecommerce} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a target='_blank' rel="noreferrer" href="https://github.com/AshvinBambhaniya/StylishFood"><motion.img variants={zoomIn(0.1, 1)} src={Food} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Portfolio;
