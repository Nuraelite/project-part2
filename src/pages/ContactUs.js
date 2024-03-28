import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-left">
        <h1>Contact Us</h1>
        <p>
          Just send us your questions or concerns by filling up the contact form
          or by starting a new ticket by clicking on the help button on the bottom
          right and we will give you the best help you need.
        </p>
        <p>
          We provide support in multiple languages.
        </p>
      </div>
      <div className="contact-us-adress">
        <h2>Address</h2>
        <p>
          Premises NO. 19948-001, IFZA Business Park, DDP Dubai U.A.E
        </p>
        <h2>Email</h2>
        <p>
          <a href='mailto:31042@iitu.edu.kz'>31042@iitu.edu.kz</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
