import React from 'react'

export default function Feedback() {
  return (
    <div>
      <section className="py-5 bg-white" id="feedback">
      <div className="container">
        
       
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark display-5 text-lowercase">feedback</h2>
          <p className="text-muted" style={{ fontSize: '1.05rem' }}>
            we will be very happy , if you subbmit you feedback for any other special request
          </p>
        </div>

      
        <div className="row g-4 justify-content-center align-items-start mt-2">
          
    
          <div className="col-12 col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control py-2.5 rounded-0 border-secondary-subtle" 
                  placeholder="Your Name"
                  style={{ fontSize: '0.95rem' }}
                />
              </div>

              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control py-2.5 rounded-0 border-secondary-subtle" 
                  placeholder="Your Mail"
                  style={{ fontSize: '0.95rem' }}
                />
              </div>

              <div className="mb-4">
                <textarea 
                  className="form-control rounded-0 border-secondary-subtle" 
                  placeholder="Your placeholder"
                  rows="6"
                  style={{ fontSize: '0.95rem', resize: 'none' }}
                ></textarea>
              </div>

              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn text-white w-50 py-2 fw-semibold"
                  style={{ backgroundColor: '#e23e4b', borderRadius: '4px', fontSize: '0.95rem' }}
                >
                  Submit
                </button>
              </div>

            </form>
          </div>

       
          <div className="col-12 col-md-4 ps-md-5 text-center text-md-start mt-5 mt-md-0">
            
          
            <div className="mb-4">
              <h3 className="text-danger fw-bold border-bottom border-danger border-2 d-inline-block pb-1 mb-2 text-decoration-none">
                Address
              </h3>
              <p className="text-muted m-0" style={{ fontSize: '0.95rem' }}>16.B Mohandiseen, Giza, Egypt</p>
            </div>

           
            <div className="mb-4">
              <h3 className="text-danger fw-bold border-bottom border-danger border-2 d-inline-block pb-1 mb-2 text-decoration-none">
                E-mail :
              </h3>
              <p className="text-muted m-0" style={{ fontSize: '0.95rem' }}>dokanshop@company.com</p>
            </div>

            
            <div className="mb-4">
              <h3 className="text-danger fw-bold border-bottom border-danger border-2 d-inline-block pb-1 mb-2 text-decoration-none">
                Mobile Number :
              </h3>
              <p className="text-muted m-0" style={{ fontSize: '0.95rem' }}>+20-11-580-395-64</p>
            </div>

          </div>

        </div>

      </div>
    </section>
    </div>
  )
}
