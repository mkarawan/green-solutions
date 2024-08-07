import React from "react";
import "./Practices.css";

const Practices: React.FC = () => {
  return (
    <>
      <section className="steps">
          <h2 className="white-heading">
            Implementing Ecological Practices for a Greener Future<img className="header-accent" src={"./cream-accent.svg"} />
          </h2>
          

        <p>
          At Green Solutions, we guide our clients through a step-by-step
          process to help them implement ecological practices and minimize their
          impact on the environment. Our team of experts provides tailored
          solutions that promote sustainable development and environmental
          protection.
        </p>
        <div>
        <img className="graphic earth" src={'./earth.png'} />
        <div className="step">
            <h3><img className="header-accent" src={"./cream-poin.svg"} />
              Step <span className="number">1</span>
            </h3>
            <p>Initial Consultation and Assessment of Environmental Impact</p>
          </div>
          <div className="step">
            <h3><img className="header-accent" src={"./cream-poin.svg"} />
              Step <span className="number">2</span>
            </h3>
            <p>
              Development of Customized Eco-Friendly Strategies and Solutions
            </p>
          </div>
          <div className="step">
            <h3><img className="header-accent" src={"./cream-poin.svg"} />
              Step <span className="number">3</span>
            </h3>
            <p>Implementation of Sustainable Practices and Technologies</p>
          </div>
          <div className="step">
            <h3><img className="header-accent" src={"./cream-poin.svg"} />
              Step <span className="number">4</span>
            </h3>
            <p>Monitoring and Evaluation of Environmental Performance</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Practices;
