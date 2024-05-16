import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import dashboardIMG from "../assets/images/illustration-dashboard.png";

function Hero() {
  const [userEmail, setUserEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(event) {
    const newVal = event.target.value;
    setUserEmail(newVal);
    setIsValid(emailRegex.test(newVal));
  }

  function handleClick(event) {
    setIsClicked(true);
    event.preventDefault();
  }
  return (
    <div className="hero-container">
      <img src={logo} alt="Ping-logo" className="logo" />
      <h1>
        <span>We are launching</span> soon!
      </h1>
      <p>Subscribe and get notified</p>
      <div className="form-container">
        <form onSubmit={handleClick}>
          <label htmlFor="email">
            <input
              value={userEmail}
              name="email"
              type="text"
              id="email"
              placeholder="Your email address..."
              onChange={handleChange}
              className={isClicked && !isValid ? "error" : ""}
            />
            {isClicked && !isValid && (
              <span className="error-message">
                Please provide a valid email address
              </span>
            )}
          </label>
          <button type="submit">Notify Me!</button>
        </form>
      </div>
      <img
        src={dashboardIMG}
        alt="dashboard-image"
        className="dashboard-image"
      />
    </div>
  );
}
export default Hero;
