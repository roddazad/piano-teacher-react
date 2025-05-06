import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="container text-center py-5">
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
    </section>
  );
};

export default About; 