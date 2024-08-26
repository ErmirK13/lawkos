import React from "react";
import "./styles/testimonials.scss";
import { FaQuoteLeft } from "react-icons/fa";
import img11 from "../images/img11.PNG";
import img12 from "../images/img12.PNG";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">What our clients say about us</h1>
      <div className="feedbacks">
        <div className="feedback">
          <div className="feedback-text">
            <div>
              <img
                src={img11}
                alt="Drilon Krasniqi"
                className="feedback-image"
              />
              <FaQuoteLeft className="quote-icon left" />
            </div>

            <p className="feedback-content">
              LawKos is our trustworthy legal partner. Their team is
              professional, responsible, and very supportive. The legal advice
              and services provided are always successful. We want to thank
              LawKos for being an important factor in the success of our
              company.
            </p>
            <hr className="underline" />
            <p className="feedback-author">Drilon Krasniqi</p>
            <p className="feedback-position">Director, TravelKos</p>
          </div>
        </div>
        <div className="feedback">
          <div className="feedback-text">
            <div>
              <img
                src={img12}
                alt="Blinera Morina"
                className="feedback-image"
              />
              <FaQuoteLeft className="quote-icon left" />
            </div>
            <p className="feedback-content">
              Thank you LawKos for your amazing services. We want to express our
              gratitude for all the years we have been working together. Your
              team is very professional and talented. We would recommend LawKos
              to anyone who needs legal services and solutions.
            </p>
            <hr className="underline" />
            <p className="feedback-author">Blinera Morina</p>
            <p className="feedback-position">CEO, Jackal Agency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
