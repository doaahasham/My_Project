import React from 'react';
import aboutImage from '../media/about-left-image (1).jpg'; 
import './about.css';

export default function About() {
  return (
    <section id="about" className="about-section-container">
      <div className="container about-row-wrapper">
        
        <div className="about-image-column">
          <div className="about-image-frame">
            <img src={aboutImage} alt="Dokan Storefront Display" />
           
          </div>
        </div>

        
        <div className="about-text-column">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias 
            laboriosam aspernatur ipsa obcaecati accusamus non eius velit reprehenderit 
            iure recusandae sapiente eveniet sequi eaque, ex in quasi odio illo magni 
            veritatis rem hic ut porro quaerat? Expedita quis quas consectetur excepturi 
            aspernatur ad hic vero omnis iste aut veritatis veniam numquam accusantium 
            sit, facilis in cum ratione esse? Voluptas, ab. Magni, quas. Cupiditate autem 
            earum voluptatem, ab eligendi delectus nesciunt doloribus sequi veniam. Quasi 
            voluptates incidunt sunt ut veniam!
          </p>
          
          
          <div className="about-social-icons">
            <a href="https://www.linkedin.com/in/doaa-hesham-448459320/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/doaa.hesham.544397" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/doaahesham912/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

      </div>
    </section>
  );
}