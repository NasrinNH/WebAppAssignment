import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram />
        <FaTwitter />
        <FaFacebookF />
        <FaLinkedinIn />
      </div>
    </div>
  );
}

export default Footer;
