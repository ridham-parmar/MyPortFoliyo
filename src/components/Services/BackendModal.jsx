import React from 'react'
import { motion } from "framer-motion";
import { zoomIn } from '../../utils/motion';
import "./BackendModal.css"

const BackendModal = (props) => {

    const { close } = props;

    return (
        <motion.div className="modal-content"
            variants={zoomIn(0.2, 1.5)}>
            <div className="pop-container">
                <span onClick={close} className="close">×</span>
                <div className="pop-skill">
                    <h2>NodeJs</h2>
                    <div className="progress-bar">
                        <div className="node"><span>25%</span></div>
                    </div>
                    <h2>Expess</h2>
                    <div className="progress-bar">
                        <div className="express"><span>36%</span></div>
                    </div>
                    <h2>JavaScript</h2>
                    <div className="progress-bar">
                        <div className="js"><span>75%</span></div>
                    </div>
                    <h2>MongoDB</h2>
                    <div className="progress-bar">
                        <div className="mongo"><span>25%</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default BackendModal
