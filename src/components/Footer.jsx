import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./css/footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="socials">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <div className="icon-wrapper">
          {" "}
          <FaFacebookF />
        </div>
        <div className="icon-wrapper">
          <FaTwitter />
        </div>
        <div className="icon-wrapper">
          <FaInstagram />
        </div>
      </IconContext.Provider>
      </div>
      <p className="copyright">© Copyright Ping. All rights reserved.</p>
    </div>
  );
}

export default Footer;
 