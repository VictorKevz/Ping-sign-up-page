import React, { useState } from "react";
import "./css/feedback.css";
import verified from "../assets/images/verified.svg";

function Feedback({onClose,isDark}) {
  return (
    <div className={`feedback-wrapper  ${isDark ? "bg-dark":""}`}>
        
      <img src={verified} alt="check mark icon" />
      <h2 className={`feedback-title ${isDark ? "white-text":""}`}>Thank You!</h2>
      <p className={`feedback-paragraph ${isDark ? "gray-text":""}`}>Your email is registered!</p>

      <button className="btn feedback" onClick={onClose}>
        Continue
      </button>
    </div>
  );
}

export default Feedback;