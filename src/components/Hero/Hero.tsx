import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <>
    <section className="hero">
    <img className="shape" src={'./olive-shape.svg'} />

      <h1 className="hero-main">Leading the way towards a greener future</h1>
      <p>
        At Green Solutions, we help clients adopt sustainable practices and
        minimize environmental impact through our comprehensive services.
      </p>
      <div className="buttons">
      <button className="gradient-btn">Check us out</button>
      <button className="border-btn">Contact us</button>
      </div>
      <img className="shape2" src={'./mint-shape.svg'} />
      <img className="box" src={'./box.svg'} />
      <img className="cup" src={'./cup.svg'} />


      </section>
    </>
  );
};

export default Hero;
