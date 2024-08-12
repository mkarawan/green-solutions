import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { IconContext } from "react-icons";

const Contact: React.FC = () => {
  const gridStyle={
    gridColumn: '2/3'
  };
  return (
    <>

      <section id="contact" className="contact">
      <div className="contact-bg "></div>

        <h2>Contact Green Solutions</h2>
        <p>We're here to answer any questions you may have.</p>
        <div className=" layout contact-layout">
        <div className="form">
          <p>Name</p>
          <input type="text"></input>
          <p>Email</p>
          <input type="email"></input>
          <p>Message</p>
          <textarea placeholder="Enter your message..."></textarea>
          <button className="gradient-btn olive-gradient" type="submit">
            Submit
          </button>
        </div>
        <div className="contact-box-layout" style={gridStyle}>
          <div className="contact-box">
          <div className="contacts">
            <IconContext.Provider
              value={{ color: "var(--dark-green", size: "35px" }}
            >
              <div>
                <MdOutlineEmail />
              </div>
            </IconContext.Provider>
            <h3>Email</h3>
          </div>
          <p>For general inquiries, contact us at:</p>
          <a href="mailto:contact@greensolutions.com"><p>contact@greensolutions.com</p></a>
          </div>
          <div className="contact-box">

          <div className="contacts">
            <IconContext.Provider
              value={{ color: "var(--dark-green", size: "35px" }}
            >
              <div>
                <FiPhone />
              </div>
            </IconContext.Provider>
            <h3>Phone</h3>
          </div>
          <p>For urgent matters, call us at:</p>
          <p>+1 (555) 000-0000</p>
          </div>
          <div className="contact-box">

          <div className="contacts">
            <IconContext.Provider
              value={{ color: "var(--dark-green", size: "35px" }}
            >
              <div>
                <FiMapPin />
              </div>
            </IconContext.Provider>{" "}
            <h3>Office</h3>
          </div>
          <p>456 Great Ave, Melbourne VIC 3000 AU</p>
        </div>
        </div>
      
       
        </div>
        <div className="line"></div>
      </section>
    </>
  );
};

export default Contact;
