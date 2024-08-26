import React from "react";
import img4 from "../images/img4.PNG";
import "./styles/services.scss";

const Services = () => {
  return (
    <div className="services-section">
      <h1>Services</h1>
      <div className="underline"></div>
      <div className="services-grid">
        <div className="service-category">
          <h2>Personale</h2>
          <p>
            From family law to personal injury, we treat your case with the care
            it deserves. Let's protect what matters most to you.
          </p>
        </div>
        <div className="service-category">
          <h2>Business</h2>
          <p>
            Achieve your business goals with LawKos comprehensive legal
            solutions, designed to mitigate risks and fuel your growth.
          </p>
        </div>
        <img src={img4} alt="Services" className="services-image" />
      </div>
    </div>
  );
};

export default Services;
