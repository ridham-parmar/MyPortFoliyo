import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import { workExp } from "../../utils/data";
import "./Study.css";
import { themeContext } from '../../Context';

const Study = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const mobile = window.innerWidth <= 480 ? true : false;

    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={mobile ? { once: false, amount: 0 } : { once: false, amount: 0.25 }}
            className="paddings wrapper" id="education">
            {/* <a className="anchor" ></a> */}

            <div className="flexCenter container">
                {/* heading */}
                <span style={{ textAlign: "center" }} className="primaryText">My Education</span>

                <div className="flexCenter experiences">
                    <div className="blur s-blur-study-1" style={{ background: "#ABF1FF94" }}></div>
                    {workExp.map((exp, i) => {
                        return (
                            <motion.div variants={textVariant2} key={i} className="flexCenter exp">
                                <div className="post">
                                    <h1 style={{ color: darkMode ? "var(--orange)" : "" }} className='study-h1'>{exp.place}</h1>
                                    <p className='study-p'>{exp.tenure}</p>
                                </div>
                                <div className="role">
                                    <h1 style={{ color: darkMode ? "var(--orange)" : "" }} className='study-h1'>{exp.role}</h1>
                                    <p className='study-p'>{exp.detail}</p>
                                </div>
                            </motion.div>
                        );
                    })}


                    <motion.div variants={zoomIn(1, 1)} className="progressbar">
                        <motion.div variants={fadeIn("up", "tween", 2, 1.5)} className="line"></motion.div>
                        <div><div className="circle" style={{ background: "#286F6C" }}></div></div>
                        <div><div className="circle" style={{ background: "#fca61f" }}></div></div>
                        <div><div className="circle" style={{ background: "#F2704E" }}></div></div>
                        <div><div className="circle" style={{ background: "#EEC048" }}></div></div>
                    </motion.div>
                    <div
                        className="blur s-blur-study-2"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </div>

            </div>

        </motion.section>
    )
}

export default Study
