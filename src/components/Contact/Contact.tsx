import React from 'react';

const Contact: React.FC = () => {

return ( 
<>
<h2>Contact Green Solutions</h2>
<p>We're here to answer any questions you may have.</p>
<div>
<p>Name</p>
<input type='text'></input>
<p>Email</p>
<input type='email'></input>
<p>Message</p>
<textarea placeholder='Enter your message...'></textarea>
<button type='submit'>Send</button>
</div>
<div>
    <h3>Email</h3>
    <p>For general inquiries, contact us at:</p>
    <p>contact@greensolutions.com</p>
    <h3>Phone</h3>
    <p>For urgent matters, call us at:</p>
    <p>+1 (555) 000-0000</p>
    <h3>Office</h3>
    <p>456 Great Ave, Melbourne VIC 3000 AU</p>
</div>
</>
  );
  };

export default Contact;