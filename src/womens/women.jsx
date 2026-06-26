import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./women.css";

import kidImage1 from '../media/products-background.jpg';  

export default function Womens() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((data) => {
        const localMapped = data.map((item) => ({
          id: item.id,
          name: item.title,
          price: `EGP ${(item.price * 48).toFixed(1)}`,
          img: item.image,
          path: "/women"
        }));
        
        let filledData = [...localMapped];
        while (filledData.length < 90) {
          filledData = [...filledData, ...localMapped.map(item => ({...item, id: Math.random()}))];
        }
        
        setProducts(filledData.slice(0, 90));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 9, products.length));
  };

  if (loading) {
    return (
      <div className="text-center my-5 pt-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      
      <div className="hero-container w-100">
        <img src={kidImage1} className="slider-img" alt="Women Fashion" />
        <div className="custom-caption d-flex flex-column align-items-center justify-content-center">
          <h2>Check Our Products</h2>
          <p>"Style is something each of us already has, all we need to do is find it."</p>
        </div>
      </div>    
   
     
      <div className="products-section text-center container my-5">
        <h1 className="products-title fw-bold">Women's Fashion</h1>
        <p className="products-subtitle text-muted mb-5">
          Check Out All Of Our Products
        </p>

        <div className="product-grid-container mx-auto">
          
          <div className="row gx-0 gy-3 justify-content-evenly">
            {products.slice(0, visibleCount).map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                
                <div className="card-width-reducer w-100 h-100 d-flex flex-column">
                  <div className="dokan-product-card w-100 h-100 d-flex flex-column">

                    
                    <div className="img-wrapper p-3 d-flex justify-content-center align-items-center">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="custom-product-img"
                      />
                    </div>

                  
                    <div className="product-info-panel p-3 mt-auto">
                      <div className="actions-row d-flex justify-content-around gap-5 mb-2">
                        <span className="icon-btn heart-icon">
                          <i className="fa-solid fa-heart"></i>
                        </span>
                        <span className="icon-btn cart-icon">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                      </div>
                      <h5 className="product-name fw-semibold">{product.name}</h5>
                      <p className="product-price fw-semibold mt-2">{product.price}</p>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        
        {visibleCount < products.length && (
          <>
            <div className="mt-5">
              <button className="load-more-btn btn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
            <hr className="mt-5" />
          </>
        )}
      </div>
    </>
  );
}