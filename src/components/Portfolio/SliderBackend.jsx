import React from 'react'
import NoteBook from "../../img/NoteBook.png";
import Ecommerce from "../../img/amazonclone.png";
import Library from "../../img/Library.png";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { zoomIn } from "../../utils/motion";
import { motion } from "framer-motion";

const SliderBackend = (props) => {
    const mobile = window.innerWidth <= 480 ? true : false;
    return (
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
                <a target='_blank' rel="noreferrer" href="https://amazon-web-clone-3q76.onrender.com"><motion.img variants={zoomIn(0.1, 1)} src={Ecommerce} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' rel="noreferrer" href="https://gecr-library.netlify.app"><motion.img variants={zoomIn(0.1, 1)} src={Library} alt="" /></a>
            </SwiperSlide>
        </Swiper>
    )
}

export default SliderBackend
