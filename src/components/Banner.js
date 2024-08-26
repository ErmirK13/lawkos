import img3 from "../images/img3.PNG";
import img2 from "../images/img2.PNG";
import img1 from "../images/img1.PNG";
import "./styles/banner.scss";

const Banner = () => (
  <div className="banner">
    <div className="banner-content">
      <h1>
        Legal solutions <br></br> to solve complex <br></br>problems
      </h1>
      <div className="aside">
        <p>
          We offer tailored and customised services attuned to our clients
          needs.
          <br />
          Wherever business takes you, we are here to help.
        </p>
        <button className="buttonn">Get a free consultation →</button>
      </div>
    </div>
    <div className="photos">
      <img src={img3} alt="img" />
      <img src={img2} alt="img" />
      <img src={img1} alt="img" />
    </div>
  </div>
);

export default Banner;
