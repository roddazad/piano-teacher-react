import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const About: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isTitleInView = useInView(titleRef, { 
    once: true, 
    amount: 0.5,
    margin: "0px 0px -100px 0px"
  });

  const isImageInView = useInView(imageRef, { 
    once: true, 
    amount: 0.5,
    margin: "0px 0px -100px 0px"
  });

  const isContentInView = useInView(contentRef, { 
    once: true, 
    amount: 0.5,
    margin: "0px 0px -100px 0px"
  });

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const rect = aboutSection.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
          setIsVisible(isInView);
        }
      };

      // Initial check
      handleScroll();

      // Add scroll listener
      window.addEventListener('scroll', handleScroll);

      // Cleanup
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  useEffect(() => {
    if (isHomePage && isVisible && (isTitleInView || isImageInView || isContentInView)) {
      setHasAnimated(true);
    }
  }, [isHomePage, isVisible, isTitleInView, isImageInView, isContentInView]);

  const renderAnimatedContent = () => (
    <>
      <motion.h2
        ref={titleRef}
        initial={{ y: -200, opacity: 0 }}
        animate={hasAnimated && isTitleInView ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 40,
          damping: 12,
          duration: 1.5,
          delay: 0.2
        }}
      >
        About Me
      </motion.h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <motion.img 
            ref={imageRef}
            src="../src/assets/Pictures/profile.jpeg" 
            className="about-img contact-image rounded-circle border border-light shadow-lg" 
            alt="Piano Teacher"
            initial={{ 
              x: -100, 
              y: -100, 
              rotate: -180, 
              opacity: 0 
            }}
            animate={hasAnimated && isImageInView ? { 
              x: 0, 
              y: 0, 
              rotate: 0, 
              opacity: 1 
            } : {
              x: -100, 
              y: -100, 
              rotate: -180, 
              opacity: 0 
            }}
            transition={{ 
              type: "spring",
              stiffness: 30,
              damping: 20,
              duration: 1.8,
              delay: 0.8
            }}
          />
        </div>
        <div className="col-md-6">
          <motion.div 
            ref={contentRef}
            id="aboutContent"
            initial={{ x: 100, opacity: 0 }}
            animate={hasAnimated && isContentInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 30,
              damping: 20,
              duration: 1.8,
              delay: 1.4
            }}
          >
            <p>
              Hello and welcome! I'm Mr. Erfanian, and I'm delighted to share a bit
              about my journey and what I can offer you and your children through my
              piano lessons.
            </p>
            <div id="moreAboutMe" className="collapse">
              <p>
                One of the most rewarding aspects of my career is working with young
                students. I believe that every child has a unique musical potential
                just waiting to be discovered. My approach to teaching kids is
                designed to be engaging, supportive, and tailored to their individual
                needs.
              </p>
              <p>
                I create a nurturing environment where children can explore their
                musical interests and develop their skills at their own pace.
              </p>
              <p>
                The success of my students speaks for itself. Many of those who have
                studied with me have gone on to achieve great things in their musical
                careers, performing on prestigious stages and earning accolades.
              </p>
            </div>
            <Link to="/about" className="btn btn-elevated mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );

  const renderStaticContent = () => (
    <>
      <h2>About Me</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img 
            src="../src/assets/Pictures/profile.jpeg" 
            className="about-img contact-image rounded-circle border border-light shadow-lg" 
            alt="Piano Teacher"
          />
        </div>
        <div className="col-md-6">
          <div id="aboutContent">
            <p>
              Hello and welcome! I'm Mr. Erfanian, and I'm delighted to share a bit
              about my journey and what I can offer you and your children through my
              piano lessons.
            </p>
            <div id="moreAboutMe" className="collapse">
              <p>
                One of the most rewarding aspects of my career is working with young
                students. I believe that every child has a unique musical potential
                just waiting to be discovered. My approach to teaching kids is
                designed to be engaging, supportive, and tailored to their individual
                needs.
              </p>
              <p>
                I create a nurturing environment where children can explore their
                musical interests and develop their skills at their own pace.
              </p>
              <p>
                The success of my students speaks for itself. Many of those who have
                studied with me have gone on to achieve great things in their musical
                careers, performing on prestigious stages and earning accolades.
              </p>
            </div>
            <Link to="/about" className="btn btn-elevated mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section id="about" className="container text-center py-5">
      {isHomePage ? renderAnimatedContent() : renderStaticContent()}
    </section>
  );
};

export default About; 