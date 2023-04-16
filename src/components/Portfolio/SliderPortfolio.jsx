import React from 'react'
import Library from "../../img/Library.png";
import Ecommerce from "../../img/amazonclone.png";
import Food from "../../img/Food.png";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { zoomIn } from "../../utils/motion";
import { motion } from "framer-motion";
import TextEditer from "../../img/text_editer.png";

const SliderPortfolio = (props) => {
    const mobile = window.innerWidth <= 480 ? true : false;
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={mobile ? 1 : 3}
            grabCursor={true}
            className="portfolio-slider"
        >
            <SwiperSlide>
                <a target='_blank' rel="noreferrer" href="https://gecr-library.netlify.app"><motion.img variants={zoomIn(0.1, 1)} src={Library} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' rel="noreferrer" href="https://amazon-web-clone-3q76.onrender.com"><motion.img variants={zoomIn(0.1, 1)} src={Ecommerce} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' rel="noreferrer" href="https://stylish-text-editer.netlify.app"><motion.img variants={zoomIn(0.1, 1)} src={TextEditer} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' rel="noreferrer" href="https://github.com/AshvinBambhaniya/StylishFood"><motion.img variants={zoomIn(0.1, 1)} src={Food} alt="" /></a>
            </SwiperSlide>
        </Swiper>
    )
}

export default SliderPortfolio
