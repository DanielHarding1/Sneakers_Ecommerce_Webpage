// Footer.js

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p><FontAwesomeIcon icon={faFacebook} />Facebook</p>
            <p><FontAwesomeIcon icon={faTwitter} />Twitter</p>
            <p> <FontAwesomeIcon icon={faInstagram} /> Instagram</p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <p>Home</p>
            <p>Products</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
