import React from 'react'
import Feedback from '../home/feedback'
import Amazingteam from './amazingteam'
import Services from './services'
import About from './about'
import kidImage1 from '../media/about-us-page-heading.jpg';  

export default function AboutUs() {
  return (
    
      <>
      
       <div className="hero-container w-100">
              <img src={kidImage1} className="slider-img" alt="Women Fashion" />
               <div className="custom-caption d-flex flex-column align-items-center justify-content-center">
          <h2>About Our Company</h2>
          <p>"Fashion is the armor to survive the reality of everyday life."</p>
        </div>
            </div> 
            <About/>
      <Amazingteam/>
      <Services/>
      <Feedback/>
    
    </>
      
  )
}
