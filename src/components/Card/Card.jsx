import React from "react";
import "./Card.css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Card = ({ emoji, heading, detail, color, popup }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div style={{ background: darkMode ? "rgb(42 52 60)" : "" }} className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button onClick={popup} className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
