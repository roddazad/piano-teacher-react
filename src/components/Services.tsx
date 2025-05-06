import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Carousel } from 'react-bootstrap';
import '../styles/Services.css';

const Services: React.FC = () => {
  const servicesRef = useRef(null);
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "center center"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0.5, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

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

  if (!isMainPage) {
    return null;
  }

  return (
    <section id="services" className="services-section" ref={servicesRef}>
      <motion.div 
        className="services-container"
        style={{ 
          rotateX,
          opacity,
          y,
          transformOrigin: "center bottom"
        }}
      >
        <h2>My Services</h2>
        <Carousel 
          interval={null} 
          indicators={true} 
          controls={true}
        >
          {services.map((service, index) => (
            <Carousel.Item key={index}>
              <div className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
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