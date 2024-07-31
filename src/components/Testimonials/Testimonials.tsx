import React from 'react';
import { FaStar } from "react-icons/fa";


const Testimonials: React.FC = () => {

return ( 
    <>
    <h2>Customer testimonials</h2>
    <div>
    <div>
        <div><FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <p>Green Solutions transformed our business with their innovative eco-friendly practices. Highly recommend!</p>
        <img></img>
        <p></p>
    </div>
    <div>
        <div><FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <p>"Thanks to Green Solutions, our company is now leading in sustainability and environmental conservation.</p>
        <img></img>
        <p>Emily Johnson</p>
    </div>
    <div>
        <div><FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <p>Excellent service and expert advice from Green Solutions helped us achieve our green goals effortlessly.</p>
        <img></img>
        <p>Jessica Brown</p>
    </div>
    </div>
    </>
  );
  };

export default Testimonials;