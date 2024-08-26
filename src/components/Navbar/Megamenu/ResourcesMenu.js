import React from "react";
import "./megamenu.scss";

const ResourcesMenu = ({ items = [], photos = [] }) => {
  return (
    <div className="resources-menu">
      <div className="menu-links">
        <h5>Resources</h5>
        <div className="inner-links">
          {items.map((item, index) => (
            <div key={index} className="menu-main-link">
              <div className="icon-container">
                <img src={item.img} alt={item.title} className="icon" />
              </div>
              <div className="block">
                <h6>{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <h6>Additional Info</h6>
        {photos.map((photo, index) => (
          <div key={index} className="slider-item">
            <div className="img">
              <img src={photo.img} alt="" />
            </div>
            <p>{photo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesMenu;
