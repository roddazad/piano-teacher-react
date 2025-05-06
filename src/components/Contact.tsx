import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container text-center py-5">
      <h2>Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="contact-info">
            <img 
              src="/Pictures/enhanced_profile.png" 
              className="contact-image mb-4" 
              alt="Contact"
            />
            <h3>Get in Touch</h3>
            <p>
              Interested in piano lessons? Have questions about my teaching methods?
              Feel free to reach out!
            </p>
            <div className="contact-details">
              <p>
                <i className="bi bi-envelope"></i> Email: contact@mohammaderfanian.com
              </p>
              <p>
                <i className="bi bi-telephone"></i> Phone: (123) 456-7890
              </p>
              <p>
                <i className="bi bi-geo-alt"></i> Location: Toronto, Ontario
              </p>
            </div>
            <div className="social-links mt-4">
              <a href="#" className="btn btn-elevated me-2">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="#" className="btn btn-elevated">
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 