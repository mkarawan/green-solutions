import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <>
    <div className="background"></div>
    <section className="hero">
      
    {/* <img className="shape" src={'./olive-shape.svg'} /> */}

      <h1 className="hero-main">Leading the way towards a greener future</h1>
      <p>
        At Green Solutions, we help clients adopt sustainable practices and
        minimize environmental impact through our comprehensive services.
      </p>
      <div className="buttons">
      <a href="#about"><button className="gradient-btn">Check us out</button></a>
      <a href="#contact"><button className="border-btn">Contact us</button></a>
      </div>


      </section>
    </>
  );
};

export default Hero;
