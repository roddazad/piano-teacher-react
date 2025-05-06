import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Carousel } from 'react-bootstrap';
import '../styles/Services.css';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const services = [
    {
      title: "Piano Lessons",
      description: "Personalized piano lessons for all skill levels, from beginners to advanced players.",
      image: "../src/assets/Pictures/service-1.jpeg"
    },
    {
      title: "Music Theory",
      description: "Comprehensive music theory classes to enhance your understanding of music.",
      image: "../src/assets/Pictures/service-2.jpg"
    },
    {
      title: "Performance Training",
      description: "Expert guidance in performance techniques and stage presence.",
      image: "../src/assets/Pictures/service-3.png"
    },
    {
      title: "Composition",
      description: "Learn the art of composing your own music and arrangements.",
      image: "../src/assets/Pictures/service-4.jpeg"
    }
  ];

  const isInView = useInView(servicesRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMainPage) {
    return null; // Don't render anything on the dedicated services page
  }

  return (
    <section id="services" className="services-section" ref={servicesRef}>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1
          }
        } : { 
          opacity: 0, 
          y: 100, 
          scale: 0.95 
        }}
        className="services-container"
      >
        <div className="text-center mb-5">
          <h2>Our Services</h2>
        </div>
        <Carousel 
          className="services-carousel custom-carousel"
          fade
          interval={5000}
          indicators={true}
          controls={true}
        >
          {services.map((service, index) => (
            <Carousel.Item key={index} className="custom-carousel-item">
              <div className="service-card">
                <div className="service-card-content">
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={service.title}
                    />
                  </div>
                  <div className="service-details">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-center mt-4">
          <Link to="/services" className="btn btn-elevated">
            <i className="bi bi-plus-circle"></i> More Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Services; 