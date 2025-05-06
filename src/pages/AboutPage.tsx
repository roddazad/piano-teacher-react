import React, { useState } from 'react';
import { FaMusic, FaStar, FaQuoteLeft } from 'react-icons/fa';
import ContactModal from '../components/ContactModal';
import '../styles/About.css';

const AboutPage: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Me</h1>
          <p className="lead">Dedicated to nurturing musical excellence through personalized instruction</p>
        </div>
      </section>

      {/* History Section */}
      <section className="about-history">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>My Journey</h2>
              <p>With over 15 years of experience in piano education, I've dedicated my life to sharing the joy of music with students of all ages. My journey began at the prestigious Royal Academy of Music, where I developed both my technical expertise and teaching philosophy.</p>
              <p>Throughout my career, I've had the privilege of teaching hundreds of students, from complete beginners to advanced performers, helping them discover their musical potential and achieve their goals.</p>
            </div>
            <div className="col-lg-6">
              <div className="history-image">
                <img src="../src/assets/Pictures/about-1.jpeg" alt="Piano Teacher" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="about-achievements">
        <div className="container">
          <h2>Professional Achievements</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="achievement-card">
                <img src="../src/assets/Pictures/certificate.jpeg" alt="Certificate" className="achievement-image" />
                <h3>Certified Instructor</h3>
                <p>Royal Academy of Music Certified Piano Instructor</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="achievement-card">
                <img src="../src/assets/Pictures/education.jpeg" alt="Education" className="achievement-image" />
                <h3>Education</h3>
                <p>Master's Degree in Piano Performance and Education</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="achievement-card">
                <img src="../src/assets/Pictures/experience.jpeg" alt="Experience" className="achievement-image" />
                <h3>Experience</h3>
                <p>15+ years teaching students of all ages and levels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="about-philosophy">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="philosophy-image">
                <img src="../src/assets/Pictures/about-2.jpeg" alt="Teaching Philosophy" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2>Teaching Philosophy</h2>
              <p>I believe that every student has a unique musical journey. My teaching approach combines:</p>
              <ul>
                <li><FaMusic /> Personalized instruction tailored to each student's goals</li>
                <li><FaStar /> Focus on both technical excellence and musical expression</li>
                <li><FaQuoteLeft /> Encouragement of creativity and individual style</li>
              </ul>
              <p>My goal is to create a supportive environment where students can develop their skills while maintaining their passion for music.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container text-center">
          <h2>Start Your Musical Journey</h2>
          <p>Join me in discovering the joy of piano playing and musical expression.</p>
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => setShowContactModal(true)}
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        show={showContactModal}
        onHide={() => setShowContactModal(false)}
      />
    </div>
  );
};

export default AboutPage; 