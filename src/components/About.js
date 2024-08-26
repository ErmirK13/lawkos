import React from "react";
import "./styles/about.scss";
import img5 from "../images/img5.PNG";
import img6 from "../images/img6.PNG";

const About = () => {
  return (
    <div className="about-container">
      <div className="title-section">
        <div className="underline"></div>
        <h1 className="title">ABOUT US</h1>
      </div>
      <div className="content-section">
        <div className="text-content">
          <div className="right-side">
            <p className="intro-text">
              Our team consists of well-coordinated lawyers that are able to
              solve the most difficult tasks and cases.
              <button className="about-button">About Us →</button>
            </p>
          </div>

          <div className="large-number">
            <span className="number">15</span>
            <p className="experience">Years of Experience</p>
          </div>
          <p className="details-text">
            Founded in 2008, LawKos is committed to the pursuit of justice in
            our country and more. Our team of dedicated professionals works
            tirelessly to serve our community. We offer legal services and
            consultancy in different areas.
          </p>
        </div>
        <div className="images-section">
          <img src={img5} alt="img" />
          <img src={img6} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default About;
