import React from 'react';
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





const Footer: React.FC = () => {

return ( 
    <>
    <img></img>
    <div>
        <div >
            <div className='social-media'>
            <IconContext.Provider
          value={{ color: "var(--dark-green", size: "25px" }}
        >
          <div>
            <FaFacebookF />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "var(--dark-green", size: "25px" }}
        >
          <div>
            <FaSquareInstagram />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "var(--dark-green", size: "25px" }}
        >
          <div>
            <FaLinkedinIn />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "var(--dark-green", size: "25px" }}
        >
          <div>
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
            <div className='line'></div>
        </div>
        <div className='terms'>
<p>Privacy Policy</p>
<p>Cookie Policy</p>
<p>Terms and Conditions</p>
<p>© 2024 Green Solutions. All rights reserved.</p>
        </div>
    </div>
    </>
  );
  };

export default Footer;
