import React from "react";
import "./styles/practice.scss";
import img7 from "../images/img7.PNG";

const Practice = ({ product }) => {
  return (
    <div className="practice-container">
      <div className="header">
        <h1 className="title">
          Our Practice Area
          <div className="underline"></div>
        </h1>

        <div className="view-all">
          <p className="view">VIEW ALL AREAS</p>
        </div>
      </div>
      <div className="areas-list">
        {product.map((item, index) => (
          <div className="area-item" key={index}>
            <img src={item.img} alt={item.title} className="area-img" />
            <h2 className="area-title">{item.title}</h2>
            <p className="area-text">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="bottom-image">
        <img src={img7} alt="" className="image" />
        <div className="text-overlay">
          <p className="bottom-text">
            From family law to personal injury, we treat your case with the care
            it deserves. Let's protect what matters most to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practice;
