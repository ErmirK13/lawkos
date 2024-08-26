import React from "react";
import img8 from "../images/img8.PNG";
import img9 from "../images/img9.PNG";
import img10 from "../images/img10.PNG";
import "./styles/team.scss";

const Team = () => {
  const data = [
    {
      img: img8,
      title: "Labinot Halimi",
      text: "Managing Partner",
      description:
        "Labinot has been working with LawKos for over 10 years. He has helped a lot ...",
    },
    {
      img: img9,
      title: "Arbenita Jashari",
      text: "Attorney at law, Partner",
      description:
        "Arbenita is a key partner at LawKos and has a strong track record in civil and commercial law...",
    },
    {
      img: img10,
      title: "Festina Murati",
      text: "Attorney at law",
      description:
        "Festina specializes in family law and has a compassionate approach to helping her clients...",
    },
  ];

  return (
    <div className="team-container">
      <div className="team-header">
        <h1 className="team-title">
          Meet our team
          <div className="underline"></div>
        </h1>
        <p className="team-description">
          Meet the brilliant minds behind LawKos. Our team of skilled lawyers
          and legal experts <br /> make LawKos your best choice for legal
          representation.
        </p>
      </div>
      <div className="team-list">
        {data.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="image-wrapper">
              <img src={member.img} alt={member.title} className="team-image" />
              <div className="background-overlay"></div>
              <div className="hover-overlay">
                <p>{member.description}</p>
                <a href="#" className="btn-read">
                  Read more
                </a>
              </div>
            </div>
            <div>
              <h2 className="member-title">{member.title}</h2>
              <p className="member-text">{member.text}</p>
              <div className="right-button">
                <button className="btn-button">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
