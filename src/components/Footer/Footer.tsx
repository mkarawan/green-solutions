import React from 'react';
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





const Footer: React.FC = () => {

return ( 
    <section className='footer'>
    <img className="big-logo" src='./gs-big-logo.svg'/>
   
            <div className='social-media'>
            <IconContext.Provider
          value={{ color: "var(--dark-green", size: "25px" }}
        >
          <div title='Facebook'>
            <FaFacebookF />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "var(--dark-green", size: "25px" }}
        >
          <div title='Instagram'>
            <FaSquareInstagram />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "var(--dark-green", size: "25px" }}
        >
          <div title='LinkedIn'>
            <FaLinkedinIn />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "var(--dark-green", size: "25px" }}
        >
          <div title='YouTube'>
            <FaYoutube />
          </div>
        </IconContext.Provider>
            </div>
            <div className='shortcuts'>
                <p>About Us</p>
                <p>Services</p>
                <p>Blog</p>
                <p>FAQ</p>
                <p>Contact</p>         
            </div>
            <div className='line line2'></div>
        <div className='terms'>
<p>Privacy Policy</p>
<p>Cookie Policy</p>
<p>Terms and Conditions</p>
<p>© 2024 Green Solutions. All rights reserved.</p>
        </div>
    </section>
  );
  };

export default Footer;
