import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, Button, Form } from 'react-bootstrap';

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="container text-center py-5">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <motion.div 
            className="contact-info"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-4">
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
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <Button 
              variant="elevated" 
              className="mt-4 btn-elevated"
              onClick={handleShow}
            >
              <i className="bi bi-envelope-fill me-2"></i>
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>

      <Modal 
        show={showModal} 
        onHide={handleClose}
        centered
        className="contact-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Get in Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write your message here..."
                required
              />
            </Form.Group>

            <div className="text-end">
              <Button variant="secondary" onClick={handleClose} className="me-2">
                Cancel
              </Button>
              <Button variant="elevated" type="submit" className="btn-elevated">
                Send Message
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Contact; 