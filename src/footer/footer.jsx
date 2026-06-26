import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./footer.css";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="dokan-footer pt-5 pb-4">
      <div className="container">
    
        <div className="row footer-main-row gy-5">

        
          <div className="col-12 col-md-6 col-lg-3 footer-col">
            <div className="logo-wrapper">
              <i className="fas fa-user-secret fa-4x mb-2 text-white"></i>
              <h2 className="logo-text m-0 fw-bold">Dokan Shop</h2>
            </div>
          </div>

         
          <div className="col-12 col-md-6 col-lg-3 footer-col">
            <h5 className="fw-bold mb-3 footer-heading">Shopping & Categories</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 p-0 m-0">
              <li><Link to="/men" className="footer-link">Men's shopping</Link></li>
              <li><Link to="/women" className="footer-link">Women's shopping</Link></li>
              <li><Link to="/kid" className="footer-link">Kid's shopping</Link></li>
              <li><Link to="/accessories" className="footer-link">Accessories</Link></li>
            </ul>
          </div>

          {/* 3. Useful Links */}
          <div className="col-12 col-md-6 col-lg-3 footer-col">
            <h5 className="fw-bold mb-3 footer-heading">Useful Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 p-0 m-0">
              <li><Link to="/" className="footer-link">Home Page</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          
          <div className="col-12 col-md-6 col-lg-3 footer-col">
            <h5 className="fw-bold mb-3 footer-heading">Help & Information</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 p-0 m-0">
              <li><Link to="/kind" className="footer-link">Help</Link></li>
              <li><Link to="/kind" className="footer-link">FAQ'S</Link></li>
              <li><Link to="/kind" className="footer-link">Track Your Shipping</Link></li>
            </ul>
          </div>

        </div>

        
        <hr className="footer-divider my-4" />

        <div className="row align-items-center">
          <div className="col-12 text-center mb-3">
            <p className="small mb-0 copyright-text">
              Copyright © 2022 DokanShop Co., Ltd. All Rights Reserved.
            </p>
          </div>

          <div className="col-12 text-center">
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.linkedin.com/in/doaa-hesham-448459320/" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/doaa.hesham.544397" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/doaahesham912/" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}