import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ashvinbambhaniya2003@gmail.com</span>
        <div className="f-icons">
          <a target='_blank' rel="noreferrer" href="https://www.instagram.com/ll__stylish_boy__ll/?utm_source=qr"><Insta className="footer-social-icon" color="white" size={"3rem"} /></a>
          <a target='_blank' rel="noreferrer" href="https://www.facebook.com/ashwin.bambhaniya.90"><Facebook className="footer-social-icon" color="white" size={"3rem"} /></a>
          <a target='_blank' rel="noreferrer" href="https://twitter.com/AshvinB48511853?t=dPRvZYpFM8Whiz7aMdRQLQ&s=08"><Twitter className="footer-social-icon" color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
