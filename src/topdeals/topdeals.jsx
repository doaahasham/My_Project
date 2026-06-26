import React from 'react';


import image_1 from '../media/deal_1.jpg'; 
import image_2 from '../media/deal-2.jpg'; 
import image_3 from '../media/deal-3.jpg'; 


import './topDeals.css'; 

export default function TopDeals() {
  return (
    <section className="py-5 bg-white" id="top-deals">
      <div className="container">
        
        
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark display-6">Hot Deals</h2>
          <p className="text-muted">searching for special things! you can find our latest deals here</p>
        </div>

        <div className="row g-4 justify-content-center">
       
          <div className="col-12 col-md-6">
            <div className="deal-card">
              <img src={image_1} alt="Sale 50%" className="deal-img" />
              
              <div className="deal-overlay">
               
                <p>Enjoy 50% Discount On Black Friday</p>
              </div>
            </div>
          </div>

         
          <div className="col-12 col-md-6">
            <div className="deal-card">
              <img src={image_2} alt="Weekend Sale" className="deal-img" />
              
              <div className="deal-overlay">
              
                <h5>Enjoy 50% Discount On Black Friday</h5>
              </div>
            </div>
          </div>

         
          <div className="col-12 col-md-8 mt-4">
            <div className="deal-card">
              <img src={image_3} alt="Free Shipping" className="deal-img deal-img-wide" />
              
              <div className="deal-overlay">
               
                <p>Enjoy 50% Discount On Black Friday</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}