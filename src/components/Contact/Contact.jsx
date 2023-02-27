import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { fadeIn, footerVariants, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j32oteh",
        "template_4h1awnz",
        form.current,
        "7g0IPD1vDcx2-3Ctb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          let form = document.getElementById("my-form")
          form.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Some error occurred. Please check console")
        }
      );
  };

  return (
    <motion.div className="contact-form" id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <motion.div className="awesome"
          variants={fadeIn("right", "tween", 0.2, 1)}>
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </motion.div>
      </div>
      {/* right side form */}
      <motion.div className="c-right"
        variants={footerVariants}>
        <form ref={form} onSubmit={sendEmail} id="my-form">
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
