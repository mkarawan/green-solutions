import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="about">
      
          <div className="our-mission">
            <h2>Our mission  <img className="header-accent" src={"./green-accent.svg"} /></h2>
           
          </div>
          <div className="layout">
          <div className="div1">
          <p>
            Our goal is to support clients in creating more ecological and
            sustainable solutions that contribute to environmental protection
            and improve the quality of life for future generations.
          </p>
          </div>
          <div className="div2">
          <p className="goals">Main goals:</p>
          <ul className="goals-list">
            <li>
              Implementing eco-friendly practices to reduce environmental
              impact.
            </li>
            <li>
              Promoting innovative solutions for sustainable development and
              natural resource conservation.
            </li>
            <li>
              Building partnerships and advocating for eco-initiatives to create
              a greener future.
            </li>
          </ul>
          </div>
          <div className="div3">
          <img className="graphic " src={"./audit.svg"} />
          </div>
          </div>
         

          <img className="cream-shape" src={'./cream-shape.svg'} />

      </section>
      <section className="transforming">
        <h2 className="centered-heading">
          Transforming the World through Sustainable Solutions
        </h2>
        <div className="layout-3col">
          <div>
          <img className="graphic" src={"./audit2.png"} />
          <h3 className="olive">Environmental Consulting</h3>
          <p>
            Our environmental consulting services provide expert guidance on
            sustainable practices and environmental regulations.
          </p>
        </div>
        <div>
          <img className="graphic" src={"./waste.png"} />
          <h3 className="olive">Waste Management </h3>
          <p>
            We provide eco-friendly waste management solutions that emphasize
            recycling and waste reduction.
          </p>
        </div>
        <div>
          <img className="graphic" src={"./turbine.png"} />
          <h3 className="olive">Renewable Energy Solutions</h3>
          <p>
            Our renewable energy solutions harness nature's power for clean,
            sustainable energy, creating a greener future.
          </p>
        </div>
        </div>
      </section>
      <section>
      <div>
          <h2 id="education" className="sea-color">
            Ecological Education and Training
          </h2>
          <div className="layout education-layout">
            <div>
            <p>
            At Green Solutions, we organize training and workshops for
            businesses and schools on sustainable development. Our team helps
            reduce your carbon footprint and ensure compliance with
            environmental regulations through various services, promoting
            eco-friendly practices and environmental responsibility.
          </p>
          <a href="#contact"><button className="gradient-btn centered-btn">Contact</button></a>
              </div>
         
          <img className="graphic education-img" src={'./education.png'} />
          </div>
        

        </div>
      </section>
    </>
  );
};

export default About;
