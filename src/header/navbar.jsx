import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isAboutPage = location.pathname === "/about";

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">

        <Link to="/" className="navbar-brand text-white fw-bold fs-2">
          <i className="fas fa-user-secret me-2"></i>
          Dokan Shop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            
            <li className="nav-item">
              <Link to="/" className="nav-link home-link">
                Home
              </Link>
            </li>

            {isAboutPage ? (
              <>
              
                <li className="nav-item">
                  <a href="#about" className="nav-link active">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#team" className="nav-link active">
                    Amazing Team
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link active">
                    Services
                  </a>
                </li>
              </>
            ) : (
              <>
                
                <li className="nav-item">
                  <Link to="/latestproduct" className="nav-link active">
                    Latest Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/topdeals" className="nav-link active">
                    Top Deals
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link active">
                    Log In
                  </Link>
                </li>
              </>
            )}

            
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>

              <ul className="dropdown-menu">
                <li><Link to="/about" className="dropdown-item">About Us</Link></li>
                <li><Link to="/men" className="dropdown-item">Men's</Link></li>
                <li><Link to="/women" className="dropdown-item">Women's</Link></li>
                <li><Link to="/kid" className="dropdown-item">Kid's</Link></li>
                <li><Link to="/accessories" className="dropdown-item">Accessories</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/contact" className="dropdown-item">Contact Us</Link></li>
              </ul>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}