import React from "react";
import "./styles/news.scss";
import img11 from "../images/img11.PNG";
import img12 from "../images/img12.PNG";
import img13 from "../images/img13.PNG";

const News = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <h1 className="news-title">News & Events</h1>
        <a href="#" className="view-all">
          View all
        </a>
      </div>
      <div className="news-content">
        <div className="left-news">
          <div className="news-item">
            <img src={img11} alt="News 1" className="news-image" />
            <div className="news-text">
              <p className="news-date">November 3, 2023</p>
              <p className="news-title">
                New law on Environmental Impact Assessment
              </p>
            </div>
          </div>
        </div>
        <div className="right-news">
          <div className="news-item">
            <img src={img12} alt="News 2" className="news-image main" />
            <div className="news-text">
              <p className="news-date">October 22, 2023</p>
              <p className="news-title">
                Kosovo's first auction for solar energy park
              </p>
            </div>
          </div>
          <div className="news-item">
            <img src={img13} alt="News 3" className="news-image overlay" />
            <div className="news-text">
              <p className="news-date">August 15, 2023</p>
              <p className="news-title">
                Labor Law in Kosovo:Explained in details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
