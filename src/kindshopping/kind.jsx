import React, { useEffect } from 'react'; // 1. Import useEffect
import Carousel from 'bootstrap/js/dist/carousel'; // 2. Import the Carousel instance

import kidImage1 from '../media/women-001.jpg'; 
import kidImage2 from '../media/men-001.jpg'; 
import kidImage3 from '../media/kid-001.jpg'; 
import kidImage4 from '../media/accessories-001.jpg'; 

import './kind.css'; 

export default function Kind() {
  
  // 3. Initialize the slider timer programmatically when the page loads
  useEffect(() => {
    const myCarouselElement = document.querySelector('#carouselExampleCaptions');
    if (myCarouselElement) {
      const carousel = new Carousel(myCarouselElement, {
        interval: 3000, // Slides change every 3 seconds (3000ms)
        touch: true,
        ride: 'carousel'
      });
      carousel.cycle(); // Starts the auto-play timer
    }
  }, []);

  return (
    <div className="main-slider-wrapper">
      {/* Keep your exact HTML structure below */}
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          
          {/* Slide 1 */}
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={kidImage1} className="d-block w-100 slider-img" alt="Women Fashion" />
            <div className="carousel-caption custom-caption">
              <h2>Women's Fashion</h2>
              <p>Some representative placeholder content for the first slide.</p>
              <div className="carousel-indicators custom-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" data-bs-interval="3000">
            <img src={kidImage2} className="d-block w-100 slider-img" alt="Men Fashion" />
            <div className="carousel-caption custom-caption">
              <h2>Men's Fashion</h2>
              <p>Some representative placeholder content for the second slide.</p>
              <div className="carousel-indicators custom-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item" data-bs-interval="3000">
            <img src={kidImage3} className="d-block w-100 slider-img" alt="Kids Fashion" />
            <div className="carousel-caption custom-caption">
              <h2>Kids' Fashion</h2>
              <p>Some representative placeholder content for the third slide.</p>
              <div className="carousel-indicators custom-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item" data-bs-interval="3000">
            <img src={kidImage4} className="d-block w-100 slider-img" alt="Accessories" />
            <div className="carousel-caption custom-caption">
              <h2>Accessories</h2>
              <p>Some representative placeholder content for the third slide.</p>
              <div className="carousel-indicators custom-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="active"></button>
              </div>
            </div>
          </div>

        </div>

        {/* Arrow Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
}