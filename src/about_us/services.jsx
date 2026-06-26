import React from 'react';

// Import your service card images here
import imgProducts from '../media/about-left-image (2).jpg';
import imgQuality from '../media/service-02 (1).jpg';
import imgAfterSale from '../media/service-03 (1).jpg';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Products",
      description: "SLorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
      image: imgProducts
    },
    {
      id: 2,
      title: "Quality",
      description: "Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
      image: imgQuality
    },
    {
      id: 3,
      title: "After Sale",
      description: "Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
      image: imgAfterSale
    }
  ];

  return (
    <section id="services" className="py-5 bg-white w-100">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark display-5 mb-3">Our Services</h2>
          <p className="text-secondary fst-italic fs-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ut!
          </p>
        </div>

        
        <div className="row justify-content-center g-4">
          {services.map((service) => (
            <div className="col-12 col-md-6 col-lg-4" key={service.id}>
              
              <div 
                className="h-100 rounded-4 d-flex flex-column justify-content-between overflow-hidden"
                style={{ backgroundColor: '#f8f9fa' }} 
              >
               
                <div className="p-4 text-center">
                  <h3 className="fw-bold text-dark mb-3 display-6" style={{ fontSize: '2.2rem' }}>
                    {service.title}
                  </h3>
                  <p className="text-muted fs-6 lh-base px-2">
                    {service.description}
                  </p>
                </div>

            
                <div style={{ width: '100%', height: '240px' }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-100 h-100 p-4" 
                    style={{ objectFit: 'cover', display: 'block' }}
                  />
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}