import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </IconContext.Provider>
      </div>
      <p>© Copyright Ping. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
