import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LogoImg from "../../assets/logo.png"
import Img1 from "../../assets/shoe1.jpeg"
import Img2 from "../../assets/shoe2.jpeg"
import Img3 from "../../assets/shoe3.jpeg"

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
          <a className="nav-link d-flex align-items-center" href="#">
              <img src={LogoImg} alt="Logo" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <a className="nav-link name" href="#">Sneakers</a>
          </div>
          <div className="col-md-6 d-flex align-items-center">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Img1} className=" d-block w-100" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img src={Img2} className="d-block w-100" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img src={Img3} className="d-block w-100" alt="Third slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
