import React from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Testimonials.css";

const Testimonials: React.FC = () => {
  return (
    <>
    <section id="testimonials" className="testimonial-section">

      <h2 className="sea-color testimonials">Customer testimonials</h2>
      <div>
        <div className="card">
          <div className="stars">
            <IconContext.Provider
              value={{ color: "var(--turquoise)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--turquoise)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--turquoise)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--turquoise)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--turquoise)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
          </div>
          <p>
            Green Solutions transformed our business with their innovative
            eco-friendly practices. Highly recommend!
          </p>
          <img className="customer-img" src={"./michael.jpg"}/>
          <p className="customer-name">Michael Smith</p>
        </div>
        <div className="card">
          <div  className="stars">
            <IconContext.Provider
              value={{ color: "var(--light-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--light-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--light-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--light-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--light-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
          </div>
          <p>
            Thanks to Green Solutions, our company is now leading in
            sustainability and environmental conservation.
          </p>
          <img className="customer-img" src={"./emily.jpg"}/>
          <p className="customer-name">Emily Johnson</p>
        </div>
        <div className="card">
          <div  className="stars">
            <IconContext.Provider
              value={{ color: "var(--mint-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--mint-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--mint-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--mint-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "var(--mint-green)", size: "15px" }}
            >
              <div>
                <FaStar />
              </div>
            </IconContext.Provider>
          </div>
          <p>
            Excellent service and expert advice from Green Solutions helped us
            achieve our green goals effortlessly.
          </p>
          <img className="customer-img" src={"./jessica.jpg"}/>
          <p className="customer-name">Jessica Brown</p>
        </div>
      </div>
      </section>

    </>
  );
};

export default Testimonials;
