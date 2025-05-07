import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaMusic, FaGraduationCap, FaUsers, FaGuitar, FaChild, FaStar, FaClock, FaCertificate } from 'react-icons/fa';
import ContactModal from '../components/ContactModal';
import '../styles/ServicePage.css';

// Import images
import service1Img from '../assets/Pictures/service-1.jpeg';
import service2Img from '../assets/Pictures/service-2.jpg';
import service3Img from '../assets/Pictures/service-3.png';
import service4Img from '../assets/Pictures/service-4.jpeg';
import service5Img from '../assets/Pictures/service-5.jpg';
import service6Img from '../assets/Pictures/service-6.jpg';
import service7Img from '../assets/Pictures/service-7.jpg';
import service8Img from '../assets/Pictures/service-8.jpg';

interface Service {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  icon: JSX.Element;
  details: {
    description: string;
    benefits: string[];
    duration: string;
    level: string;
    requirements: string[];
  };
}

const services: Service[] = [
  {
    id: 1,
    title: "Private Piano Lessons",
    shortDescription: "One-on-one instruction tailored to your musical journey",
    image: service1Img,
    icon: <FaMusic />,
    details: {
      description: "Experience personalized piano instruction designed to match your learning style and goals. Each lesson is carefully crafted to help you develop both technical skills and musical expression.",
      benefits: [
        "Personalized attention and feedback",
        "Customized curriculum",
        "Flexible scheduling",
        "Progress at your own pace"
      ],
      duration: "45-60 minutes",
      level: "All levels welcome",
      requirements: [
        "Access to a piano or keyboard",
        "Commitment to regular practice",
        "Enthusiasm for learning"
      ]
    }
  },
  {
    id: 2,
    title: "Group Piano Classes",
    shortDescription: "Learn and grow with fellow music enthusiasts",
    image: service2Img,
    icon: <FaUsers />,
    details: {
      description: "Join a supportive community of learners in our group piano classes. Perfect for beginners and intermediate players who enjoy learning in a social environment.",
      benefits: [
        "Collaborative learning environment",
        "Peer support and motivation",
        "Cost-effective option",
        "Regular group performances"
      ],
      duration: "60-90 minutes",
      level: "Beginner to Intermediate",
      requirements: [
        "Basic piano or keyboard",
        "Regular attendance",
        "Willingness to participate in group activities"
      ]
    }
  },
  {
    id: 3,
    title: "Music Theory Course",
    shortDescription: "Master the language of music",
    image: service3Img,
    icon: <FaGraduationCap />,
    details: {
      description: "Deepen your understanding of music through our comprehensive theory course. Learn to read, write, and analyze music with confidence.",
      benefits: [
        "Strong foundation in music fundamentals",
        "Improved sight-reading skills",
        "Better understanding of composition",
        "Enhanced musical appreciation"
      ],
      duration: "45 minutes",
      level: "All levels",
      requirements: [
        "Basic piano knowledge",
        "Notebook for exercises",
        "Dedication to practice"
      ]
    }
  },
  {
    id: 4,
    title: "Piano Duet Sessions",
    shortDescription: "Experience the joy of playing together",
    image: service4Img,
    icon: <FaGuitar />,
    details: {
      description: "Develop ensemble skills and musical communication through piano duet sessions. Perfect for friends, family members, or paired students.",
      benefits: [
        "Enhanced listening skills",
        "Improved rhythm and timing",
        "Better musical communication",
        "Fun collaborative experience"
      ],
      duration: "60 minutes",
      level: "Intermediate to Advanced",
      requirements: [
        "Basic piano proficiency",
        "Compatible skill level with partner",
        "Regular practice commitment"
      ]
    }
  },
  {
    id: 5,
    title: "Children's Piano Program",
    shortDescription: "Nurturing young musical talents",
    image: service5Img,
    icon: <FaChild />,
    details: {
      description: "Specially designed program for young learners, making music education fun and engaging while building a strong foundation.",
      benefits: [
        "Age-appropriate teaching methods",
        "Fun and engaging activities",
        "Development of musical ear",
        "Building confidence through performance"
      ],
      duration: "30-45 minutes",
      level: "Ages 5-12",
      requirements: [
        "Parental support and involvement",
        "Child-sized keyboard or piano",
        "Regular practice schedule"
      ]
    }
  },
  {
    id: 6,
    title: "Advanced Performance Class",
    shortDescription: "Refine your performance skills",
    image: service6Img,
    icon: <FaStar />,
    details: {
      description: "Take your playing to the next level with our advanced performance class. Perfect for serious students preparing for competitions or auditions.",
      benefits: [
        "Performance technique refinement",
        "Stage presence development",
        "Competition preparation",
        "Professional feedback"
      ],
      duration: "90 minutes",
      level: "Advanced",
      requirements: [
        "Strong technical foundation",
        "Performance experience",
        "Commitment to regular practice"
      ]
    }
  },
  {
    id: 7,
    title: "Intensive Workshop",
    shortDescription: "Deep dive into specific techniques",
    image: service7Img,
    icon: <FaClock />,
    details: {
      description: "Join our intensive workshops focusing on specific aspects of piano playing. Perfect for students looking to enhance particular skills.",
      benefits: [
        "Focused skill development",
        "Intensive practice sessions",
        "Expert guidance",
        "Immediate feedback"
      ],
      duration: "3-4 hours",
      level: "Intermediate to Advanced",
      requirements: [
        "Basic piano proficiency",
        "Specific learning goals",
        "Commitment to intensive practice"
      ]
    }
  },
  {
    id: 8,
    title: "Certificate Program",
    shortDescription: "Structured path to musical excellence",
    image: service8Img,
    icon: <FaCertificate />,
    details: {
      description: "Follow a structured curriculum leading to recognized certification. Perfect for students seeking formal recognition of their achievements.",
      benefits: [
        "Structured learning path",
        "Regular progress assessments",
        "Official certification",
        "Comprehensive skill development"
      ],
      duration: "Varies by level",
      level: "All levels",
      requirements: [
        "Commitment to long-term study",
        "Regular practice schedule",
        "Willingness to take assessments"
      ]
    }
  }
];

const ServicePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleContactClick = () => {
    setShowContactModal(true);
    setSelectedService(null);
  };

  return (
    <div className="service-page-container">
      {/* Hero Section */}
      <section className="service-page-hero">
        <div className="service-page-container">
          <h1>Discover Your Musical Journey</h1>
          <p className="service-page-lead">Unlock your potential with our comprehensive piano education programs</p>
          <div className="service-page-hero-text">
            <p>Whether you're taking your first steps into music or advancing your skills,</p>
            <p>we offer personalized instruction to help you achieve your musical aspirations.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="service-page-grid-section">
        <div className="service-page-container">
          <h2>Our Services</h2>
          <div className="service-page-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-page-card"
                onClick={() => handleServiceClick(service)}
              >
                <div className="service-page-card-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-page-card-content">
                  <div className="service-page-card-icon">{service.icon}</div>
                  <h3 className="service-page-card-title">{service.title}</h3>
                  <p className="service-page-card-description">{service.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <Modal
        show={selectedService !== null}
        onHide={handleCloseModal}
        size="lg"
        centered
        className="service-page-modal"
      >
        {selectedService && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="service-page-modal-title-content">
                  <div className="service-page-modal-icon">{selectedService.icon}</div>
                  {selectedService.title}
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="service-page-modal-details">
                <div className="service-page-modal-image">
                  <img src={selectedService.image} alt={selectedService.title} />
                </div>
                <div className="service-page-modal-info">
                  <p className="service-page-modal-description">{selectedService.details.description}</p>
                  
                  <div className="service-page-modal-benefits">
                    <h4>Benefits</h4>
                    <ul>
                      {selectedService.details.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-page-modal-requirements">
                    <h4>Requirements</h4>
                    <ul>
                      {selectedService.details.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-page-modal-meta">
                    <div className="service-page-modal-meta-item">
                      <i className="fas fa-clock"></i>
                      <span>Duration: {selectedService.details.duration}</span>
                    </div>
                    <div className="service-page-modal-meta-item">
                      <i className="fas fa-signal"></i>
                      <span>Level: {selectedService.details.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleContactClick}>
                Contact Us
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Contact Modal */}
      <ContactModal
        show={showContactModal}
        onHide={() => setShowContactModal(false)}
      />
    </div>
  );
};

export default ServicePage; 