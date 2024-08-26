import React, { useState } from "react";
import { FooterData, SocialMedia } from "./DetailFooter";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/footer.scss";
import Logo from "../images/logo.png";
import ThemeSwitcher from "./ThemeSwitcher";
import SelectLanguage from "./Languages/SelectLanguage";

const Footer = (props) => {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  return (
    <div className="shared-footer">
      <div className="main-row">
        <div className="first-col">
          <div className="top">
            <div className="footer-top">
              <Link to="/" className="logo-container">
                <img src={Logo} alt="" className="Logo"></img>
              </Link>
              <h2 className="legal">LAWKOS</h2>
            </div>
            <h5 className="excellence">LEGAL EXCELLENCE</h5>

            <div className="btn-info">
              <p>Subscribe to our newsletter</p>
              <div className="input-button-container">
                <div className="input-icon">
                  <FaEnvelope className="email-icon" />
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your email"
                  />
                </div>

                <button className="subscribe-button">Subscribe</button>
              </div>
            </div>

            <div className="row">
              <div className="contact-info">
                <FaPhone className="phone-icon" />
                <div className="phone-details">
                  <strong>+383 123 456 789</strong>
                  <small className="call-office">Call our office</small>
                </div>

                <div className="social-media-links">
                  <p className="connect-text">CONNECT WITH US:</p>
                  {SocialMedia.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="social-media-icon"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="all-footer-links">
          {FooterData.map((data, index) => (
            <div key={index} className="footer-list">
              <h6>{data.category}</h6>
              <div className="links">
                {data.links.map((linkItem, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={linkItem.to}
                    className="footer-item"
                  >
                    {linkItem.link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="underline1"></hr>
      <div className="last-row">
        <p>©2023 LAWKOS. All rights reserved.</p>
        <p>Privacy | Cookies</p>
        <ThemeSwitcher />
        <SelectLanguage />
      </div>
    </div>
  );
};

export default Footer;
