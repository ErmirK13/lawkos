import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";
import ".././styles/navbar.scss";
import ResourcesMenu from "./Megamenu/ResourcesMenu";
import ServicesMenu from "./Megamenu/ServicesMenu";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={clsx("nav", props.styles, { "dark-mode": props.isDarkMode })}
    >
      <div className="left-side">
        <div className="nav-logo">
          <div className="logo-container" />
          <div className="title">
            <strong>LAWKOS</strong>
          </div>
        </div>
      </div>

      <div className="nav-links">
        <div className="nav-link about-link">
          <Link to="/" className="inner-nav-link">
            About
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-link services-link">
          <Link to="/" className="inner-nav-link">
            Services
            <MdKeyboardArrowDown className="arrow1" />
          </Link>
          <div className="megamenu-arrow"></div>
          <div className="line"></div>
          <ServicesMenu />
        </div>

        <div className="nav-link resources-link">
          <Link to="/" className="inner-nav-link">
            Resources
            <MdKeyboardArrowDown className="arrow1" />
          </Link>
          <div className="megamenu-arrow"></div>
          <div className="line"></div>
          <ResourcesMenu />
        </div>

        <div className="nav-link news-link">
          <Link to="/" className="inner-nav-link">
            News
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-link careers-link">
          <Link to="/" className="inner-nav-link">
            Careers
          </Link>
          <div className="line"></div>
        </div>
      </div>

      <div className="aside">
        <div className="contact-info">
          <div className="phone-details">
            <FaPhone className="phone-icon" />
            <strong>+383 123 456 789</strong>
            <small className="call-office">Call our office</small>
          </div>
        </div>
      </div>

      <button className="btn-contact">Contact us</button>
      <MobileNav />
    </div>
  );
};

export default Navbar;
