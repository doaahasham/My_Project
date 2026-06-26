import React from 'react';
import Feedback from '../home/feedback';
import kidImage1 from '../media/about-us-page-heading.jpg';  
import "./contact.css";

export default function ContactUs() {
  return (
    <>
      <div className="hero-container w-100">
        <img src={kidImage1} className="slider-img" alt="Women Fashion" />
        <div className="custom-caption d-flex flex-column align-items-center justify-content-center">
          <h2>Contact Us</h2>
          <p>"The page name itself is a call to action, feel free."</p>
        </div>
      </div> 

     
      <div className="map-section-wrapper">
        <div className="map-responsive-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.158189683056!2s31.1983!3d30.0553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzE5LjEiTiAzMcKwMTEnNTMuOSJF!5e0!3m2!1sen!2seg!4v1719060000000!5m2!1sen!2seg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dokan Shop Location"
          ></iframe>
        </div>
      </div>

      <Feedback />
    </>
  );
}