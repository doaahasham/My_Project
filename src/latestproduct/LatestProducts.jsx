import React from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";

import womenJacket from "../media/women-01 (2).jpg";
import menSpring from "../media/men-01 (2).jpg";
import kidSchool from "../media/kid-01 (1).jpg";
import accessoriesImg from "../media/accessories-001.jpg";

export default function LatestProducts() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "New Green Jacket",
      price: "EGP 290.0",
      img: womenJacket,
      path: "/women"
    },
    {
      id: 2,
      name: "Classic Spring",
      price: "EGP 150.0",
      img: menSpring,
      path: "/men"
    },
    {
      id: 3,
      name: "School Collection",
      price: "EGP 295.0",
      img: kidSchool,
      path: "/kid"
    },
    {
      id: 4,
      name: "Accessories",
      price: "EGP 85.0",
      img: accessoriesImg,
      path: "/accessories"
    }
  ];

  return (
    <div className="products-section text-center container my-5">
      <h2 className="products-title fw-bold">Latest Products</h2>
      <p className="products-subtitle text-muted mb-5">
        here , you can find our newest products
      </p>

      <div className="row g-4 ">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-3">
            <div className="img-wrapper mb-3">
              <img 
                src={product.img} 
                alt={product.name} 
                className="img-fluid" 
              />
            </div>

            <div className="actions-row d-flex justify-content-around mb-2 pe-5">
              <span className="icon-btn heart-icon">
                <i className="fa-solid fa-heart"></i>
              </span>
              <span className="icon-btn cart-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>

            <h5 className="product-name fw-semibold mt-2 pe-5">{product.name}</h5>
            <p className="product-price text-secondary small pe-5">{product.price}</p>

            <button
              className="see-more-btn btn mt-2 me-5"
              onClick={() => navigate(product.path)}
            >
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}