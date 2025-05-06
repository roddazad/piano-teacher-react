import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="container text-center py-5">
      <h2>My Services</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="service-card">
            <img src="../src/assets/Pictures/youthLearning.jpeg" className="card-img-top" alt="Piano Lessons" />
            <div className="card-body">
              <h5 className="card-title">Piano Lessons</h5>
              <p className="card-text">
                Professional piano lessons for all ages and skill levels. Learn proper technique,
                music theory, and performance skills in a supportive environment.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card">
            <img src="../src/assets/Pictures/adultLearning.jpeg" className="card-img-top" alt="Music Theory" />
            <div className="card-body">
              <h5 className="card-title">Music Theory</h5>
              <p className="card-text">
                Comprehensive music theory lessons covering notation, harmony, composition,
                and ear training to enhance your musical understanding.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card">
            <img src="../src/assets/Pictures/pic3.jpg" className="card-img-top" alt="Performance Training" />
            <div className="card-body">
              <h5 className="card-title">Performance Training</h5>
              <p className="card-text">
                Specialized training for performances, competitions, and auditions. Build
                confidence and stage presence while perfecting your repertoire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 