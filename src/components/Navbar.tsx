import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
        setIsScrolled(false); // Remove background when scrolling down
      } else {
        setIsVisible(true); // Scrolling up
        setIsScrolled(currentScrollY > 50); // Only show background when scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [lastScrollY]);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`} 
      ref={navbarRef}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="brand-container">
            <img src="/favicon.svg" alt="Harmony Land" className="brand-icon" />
            <span className="brand-text">Harmony Land</span>
          </div>
        </Link>
        <button 
          className={`navbar-toggler ${isMobileMenuOpen ? 'open' : ''}`}
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about')}`} 
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/services')}`} 
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/#contact')}`} 
                to="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/dashboard')}`} 
                to="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 