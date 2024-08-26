import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner";
import Services from "../Services";
import About from "../About";
import Practice from "../Practice";
import { product } from "../productPractice";
import Team from "../Team";
import Testimonials from "../Testimonials";
import News from "../News";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Practice product={product} />
      <Team />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
