import React from 'react'
import "./FrontModal.css";
import { motion } from "framer-motion";
import { zoomIn } from '../../utils/motion';

const FrontModal = (props) => {

    const { close } = props;

    return (
        <motion.div className="modal-content"
            variants={zoomIn(0.2, 1.5)}>
            <div className="pop-container">
                <span onClick={close} className="close">×</span>
                <div className="pop-skill">
                    <h2>React</h2>
                    <div className="progress-bar">
                        <div className="react"><span>70%</span></div>
                    </div>
                    <h2>Bootstrap</h2>
                    <div className="progress-bar">
                        <div className="bootstrap"><span>70%</span></div>
                    </div>
                    <h2>HTML</h2>
                    <div className="progress-bar">
                        <div className="html"><span>65%</span></div>
                    </div>
                    <h2>CSS</h2>
                    <div className="progress-bar">
                        <div className="css"><span>65%</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default FrontModal
