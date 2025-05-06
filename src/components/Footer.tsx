import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <br />
              <Link to="/about">About Me</Link>
              <br />
              <Link to="/services">Services</Link>
              <br />
              <Link to="/#contact">Contact</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Our Promise</h4>
            <div className="company-promise">
              <p>
                <i className="bi bi-stars"></i>
                Nurturing musical excellence through personalized instruction, 
                fostering creativity, and building confidence in every student's 
                journey to piano mastery.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Contact Info</h4>
            <p>
              <i className="bi bi-envelope"></i> contact@mohammaderfanian.com
            </p>
            <p>
              <i className="bi bi-telephone"></i> (123) 456-7890
            </p>
            <p>
              <i className="bi bi-geo-alt"></i> Toronto, Ontario
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mohammad Erfanian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 