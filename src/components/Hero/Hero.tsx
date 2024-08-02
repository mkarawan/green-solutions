import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <>
    <section className="hero">
      <h1 className="hero-main">Leading the way towards a greener future</h1>
      <p>
        At Green Solutions, we help clients adopt sustainable practices and
        minimize environmental impact through our comprehensive services.
      </p>
      <div className="buttons">
      <button className="gradient-btn">Check us out</button>
      <button className="border-btn">Contact us</button>
      </div>
      </section>
    </>
  );
};

export default Hero;
