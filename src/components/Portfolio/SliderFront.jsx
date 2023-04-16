import React from 'react'
import TextEditer from "../../img/text_editer.png";
import Ecommerce from "../../img/Flipkart.png";
import Food from "../../img/Food.png";
import NewsApp from "../../img/NewsApp.png";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { zoomIn } from "../../utils/motion";
import { motion } from "framer-motion";

const SliderFront = (props) => {
    const mobile = window.innerWidth <= 480 ? true : false;
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={mobile ? 1 : 3}
            grabCursor={true}
            className="portfolio-slider"
        >
            <SwiperSlide>
                <a target='_blank' rel="noreferrer" href="https://stylish-text-editer.netlify.app"><motion.img variants={zoomIn(0.1, 1)} src={TextEditer} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' rel="noreferrer" href="https://github.com/AshvinBambhaniya/StylishNews"><motion.img variants={zoomIn(0.1, 1)} src={NewsApp} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' rel="noreferrer" href="https://github.com/AshvinBambhaniya/StylishFood"><motion.img variants={zoomIn(0.1, 1)} src={Food} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' rel="noreferrer" href="https://github.com/AshvinBambhaniya/MyOnlineShoppingWebsite"><motion.img variants={zoomIn(0.1, 1)} src={Ecommerce} alt="" /></a>
            </SwiperSlide>
        </Swiper>
    )
}

export default SliderFront
