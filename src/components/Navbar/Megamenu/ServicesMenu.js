import React from "react";
import { item, description } from "../itemsNavbar";
import "./megamenu.scss";

const ServicesMenu = () => {
  return (
    <div className="services-menu">
      <div className="services-categories">
        {item.map((service, index) => (
          <div className="service-item" key={index}>
            <img
              src={service.img}
              alt={service.title}
              className="service-icon"
            />
            <h6>{service.title}</h6>
          </div>
        ))}
      </div>

      <div className="services-descriptions">
        {description.map((desc, index) => (
          <div className="description-item" key={index}>
            <h6>{desc.title}</h6>
            <p>{desc.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMenu;
