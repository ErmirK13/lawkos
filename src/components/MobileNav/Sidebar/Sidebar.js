import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiInfo, FiRadio } from "react-icons/fi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { RiInformationFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { item, items } from "../../Navbar/itemsNavbar";

const Sidebar = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <div className="mobile-sidebar">
      <div className="sidebar-logo-row">
        <Link to="/">
          <div className="mobile-logo-container"></div>
          <span className="logo-text">LawKos</span>
        </Link>
        <button onClick={props.click}>
          <CgClose />{" "}
        </button>
      </div>

      <div className="mobile-sidebar-links">
        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link">
            <Link to="/" className="nav-anchor">
              <FiInfo />
              About
            </Link>
          </div>
        </div>

        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("services")}
          >
            <Link to="/" className="nav-anchor">
              <HiOutlineDocumentDuplicate />
              Services
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {activeDropdown === "services" && (
            <div className="mobile-dropdown">
              {item.map((props, index) => (
                <div key={index} className="inner-links">
                  <Link to={props.img}>{props.title}</Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("resources")}
          >
            <Link to="/AllServices" className="nav-anchor">
              <RiInformationFill />
              Resources
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {activeDropdown === "resources" && (
            <div className="mobile-dropdown">
              {items.map((props, index) => (
                <div key={index} className="inner-links">
                  <Link to={props.img}>{props.title}</Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <FiRadio />
            News
          </Link>
        </div>
        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <MdWork />
            Careers
          </Link>
        </div>
      </div>

      <div className="sidebar-auth">
        <Link to="/" className="contact-us">
          Contact Us
        </Link>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default Sidebar;
