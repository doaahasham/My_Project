import React from 'react'
import Kind from '../kindshopping/kind'
import TopDeals from '../topdeals/topdeals'
import LatestProducts from '../latestproduct/LatestProducts'
import Feedback from './feedback'

export default function Home() {
  return (
    <div className='bg-white'>

      
      <Kind/>

      <LatestProducts/>


      

      <section className="py-5 bg-white">
      <div className="container">
        
       
        <div className="text-center my-5">
          <h2 className="fw-bold text-dark mb-1" style={{ fontSize: '2rem', letterSpacing: '0.3px' }}>
            Dokan Shop Store
          </h2>
          <p className="text-muted mt-2" style={{ fontSize: '0.8rem' }}>
            This Is Our Store In Real, Don't Miss To Visit Us
          </p>
        </div>
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-10">
            
           
            <div className="ratio ratio-16x9 shadow-sm rounded overflow-hidden bg-black">
              <video 
                controls 
                poster="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200"
              >
                
                <source src="https://dokan-shop-ruddy.vercel.app/media/videoplayback.mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </div>

      </div>
    </section>


    <TopDeals/>

      

    <Feedback />
    </div>
  )
}
