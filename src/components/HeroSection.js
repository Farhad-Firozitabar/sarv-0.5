import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const HeroSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const getStartedButtonStyle = {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    borderRadius: '10px',
    backgroundColor: '#005200',
    color: 'white',
    marginRight: '10px',
    border: '2px solid #005200',
    transition: 'background-color 0.3s',
  };

  const contactUsButtonStyle = {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '2px solid #70E000',
    backgroundColor: '#1f1f1f',
    color: 'white',
    transition: 'background-color 0.3s, transform 0.2s',
  };

  contactUsButtonStyle[':hover'] = {
    backgroundColor: '#70E000',
    transform: 'scale(1.05)',
  };

  const handleContactModalShow = () => {
    setShowContactModal(true);
  };

  const handleContactModalClose = () => {
    setShowContactModal(false);
  };

  return (
    <div className="hero-section mb- mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 style={{ fontFamily: 'Montserrat', fontSize: '3.5rem', fontWeight: 'bold', color: 'white' }}>
              Build. Secure. Grow.
            </h1>
            <p style={{ fontFamily: 'Montserrat', color: 'white', fontSize: '1.8rem', fontWeight: 'bold' }}>
              Sarv is the ultimate, reliable, and innovative solution for creating high-quality websites and applications with the best security features.
            </p>
            <a href='#order'><Button style={getStartedButtonStyle} onMouseEnter={e => e.target.style.backgroundColor = '#008300'} onMouseLeave={e => e.target.style.backgroundColor = '#005200'}>
              Get Started
            </Button></a>
            <Button
              style={contactUsButtonStyle}
              onMouseEnter={e => e.target.style.backgroundColor = '#004000'}
              onMouseLeave={e => e.target.style.backgroundColor = '#1f1f1f'}
              onClick={handleContactModalShow}
            >
              Contact Us
            </Button>
          </div>
          <div className="col-md-5">
            {/* Add an image */}
            <img />
          </div>
        </div>
      </div>

      {/* Contact Us Modal */}
      <Modal show={showContactModal} onHide={handleContactModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email: <a href="mailto:contact@sarvsecurity.com">contact@sarvsecurity.com</a></p>
          <p>Phone Number: +98 935 157 1379</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeroSection;
