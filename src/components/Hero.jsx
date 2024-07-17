import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import darkLogo from "../assets/images/dark-logo.svg";
import dashboardIMG from "../assets/images/illustration-dashboard.png";
import darkIllustration from "../assets/images/dark-illustration.png";

import "./css/hero.css";
import Feedback from "./Feedback";
function Hero({isDark}) {
 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const[email,setEmail] = useState("")
const[isValid,setValid] = useState(true);
const[showFeedback, setShowFeedback] = useState(false)

const handleChange = (e)=>{
setEmail(e.target.value)
setValid(true)
}
const handleSubmit = (e)=>{
  e.preventDefault();
  if(!email || !emailRegex.test(email)){
    setValid(false)
  }
  else{
    setShowFeedback(true)
  }
  
  }
  const closeFeedback = ()=>{
    handleReset()
    }
  const handleReset = ()=>{
    setEmail("")
    setValid(true)
    setShowFeedback(false)
    }
  return (
    <div className="hero-container">
      <header className="hero-header">
        <img src={isDark ? darkLogo :logo} alt="Ping-logo" className="logo" />
        <h1 className={`hero-title `}>
          We are launching <span className={`title-bold ${isDark ? "white-text":""}`}>soon!</span>
        </h1>
        <p className={`hero-parag ${isDark ? "white-text":""}`}>Subscribe and get notified</p>
      </header>

      {showFeedback ? <Feedback onClose={closeFeedback} isDark={isDark}/> :<form className="form-container" onSubmit={handleSubmit} >
        <div className="field">
          <label htmlFor="userEmail"></label>
          <input
           
            name="email"
            value={email}
            type="text"
            id="userEmail"
            placeholder="Your email address..."
            className={`form-input ${isDark ? "bg-dark":""}`}
            onChange={handleChange}
           
           
          />

          {!isValid && <span className="error-message">
            Please provide a valid email address
          </span>}
        </div>
        <button className="form-btn" type="submit">Notify Me</button>
      </form>}
      <div className="hero-image-container">
        <img
          src={isDark? darkIllustration : dashboardIMG}
          alt="dashboard-image"
          className={`hero-img ${isDark ? "dark-img":""}`}
        />
      </div>
    </div>
  );
}
export default Hero;
