import React from 'react';
import Button from 'react-bootstrap/Button';

const HeroSection = () => {
  const getStartedButtonStyle = {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    borderRadius: '10px',
    backgroundColor: '#005200',
    color: 'white',
    marginRight: '10px', // Add space between buttons
    border: '2px solid #005200', // Add border with the #005200 color
    transition: 'background-color 0.3s',
  };

  const contactUsButtonStyle = {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '2px solid #70E000', // Outline color of #70E000
    backgroundColor: '#1f1f1f', // Background color of #1f1f1f
    color: 'white', // Text color of #70E000
    transition: 'background-color 0.3s, transform 0.2s',
  };

  // Define the hover effect for the Contact Us button
  contactUsButtonStyle[':hover'] = {
    backgroundColor: '#70E000',
    transform: 'scale(1.05)',
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
            <Button style={getStartedButtonStyle} onMouseEnter={e => e.target.style.backgroundColor = '#008300'} onMouseLeave={e => e.target.style.backgroundColor = '#005200'}>
              Get Started
            </Button>
            <Button style={contactUsButtonStyle} onMouseEnter={e => e.target.style.backgroundColor = '#004000'} onMouseLeave={e => e.target.style.backgroundColor = '#1f1f1f'}>
              Contact Us
            </Button>
          </div>
          <div className="col-md-5">
            {/* Add an image */}
            <img />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
