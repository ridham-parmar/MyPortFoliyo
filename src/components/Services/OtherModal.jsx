import React from 'react'
import { motion } from "framer-motion";
import { zoomIn } from '../../utils/motion';
import "./OtherModal.css"

const OtherModal = (props) => {

    const { close } = props;

    return (
        <motion.div className="modal-content"
            variants={zoomIn(0.2, 1.5)}>
            <div className="pop-container">
                <span onClick={close} className="close">×</span>
                <div className="pop-skill">
                    <h2>Data Structure</h2>
                    <div className="progress-bar">
                        <div className="ds"><span>70%</span></div>
                    </div>
                    <h2>Oject Oriented Programming</h2>
                    <div className="progress-bar">
                        <div className="oops"><span>65%</span></div>
                    </div>
                    <h2>SQL</h2>
                    <div className="progress-bar">
                        <div className="sql"><span>30%</span></div>
                    </div>
                    <h2>Git Command</h2>
                    <div className="progress-bar">
                        <div className="git"><span>55%</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default OtherModal
