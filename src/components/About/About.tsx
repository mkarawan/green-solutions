import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <>
      <section>
        <div>
        <h2>Our mission</h2>
        <p>
          Our goal is to support clients in creating more ecological and
          sustainable solutions that contribute to environmental protection and
          improve the quality of life for future generations.
        </p>
        <p className="goals">Main goals:</p>
        <ul>
          <li>
            Implementing eco-friendly practices to reduce environmental impact.
          </li>
          <li>
            Promoting innovative solutions for sustainable development and
            natural resource conservation.
          </li>
          <li>
            Building partnerships and advocating for eco-initiatives to create a
            greener future.
          </li>
        </ul>
        <img></img>
      </div>
      </section>
      <section>
        <h2>Transforming the World through Sustainable Solutions</h2>
        <div>
            <img></img>
            <h3 className="olive">Environmental Consulting</h3>
            <p>Our environmental consulting services provide expert guidance on sustainable practices and environmental regulations.</p>
        </div>
        <div>
            <img></img>
            <h3 className="olive">Waste Management </h3>
            <p>We provide eco-friendly waste management solutions that emphasize recycling and waste reduction.</p>
        </div>
        <div>
            <img></img>
            <h3 className="olive">Renewable Energy Solutions</h3>
            <p>Our renewable energy solutions harness nature's power for clean, sustainable energy, creating a greener future.</p>
        </div>
      </section>
      <section>
            <img></img>
    <div>
        <h2 className="sea-color">Ecological Education and Training
        </h2>
        <p>At Green Solutions, we organize training and workshops for businesses and schools on sustainable development. Our team helps reduce your carbon footprint and ensure compliance with environmental regulations through various services, promoting eco-friendly practices and environmental responsibility.</p>
        <button className="gradient-btn">Contact</button>
    </div>
      </section>
   
    </>
  );
};

export default About;
