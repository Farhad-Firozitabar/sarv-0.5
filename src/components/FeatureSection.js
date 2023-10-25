import React, { useEffect, useState } from 'react';

const featureBoxStyle = {
  backgroundColor: '#292929', // Background color
  color: 'white',
  fontFamily: 'Montserrat',
  marginBottom: '20px', // Spacing between feature boxes
  padding: '20px',
};

const titleStyle = {
  fontSize: '1.5rem', // Larger font size
  textAlign: 'center', // Center the title
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  // Adjust other styles as needed
};

const FeatureSection = () => {
  const [maxHeight, setMaxHeight] = useState(0);

  // Calculate the maximum height among cards in each row
  useEffect(() => {
    const calculateMaxHeight = () => {
      const rows = document.querySelectorAll('.row');
      rows.forEach((row) => {
        const cards = row.querySelectorAll('.card');
        let max = 0;
        cards.forEach((card) => {
          max = Math.max(max, card.clientHeight);
        });
        cards.forEach((card) => {
          card.style.height = `${max}px`;
        });
      });
    };

    // Calculate max height on page load and when the window is resized
    window.addEventListener('load', calculateMaxHeight);
    window.addEventListener('resize', calculateMaxHeight);
    calculateMaxHeight();

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener('load', calculateMaxHeight);
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, []);

  return (
    <div className="feature-section">
      <div className="container mt-5">
        {/* First Row */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <div class="card text-bg-dark mb-3" style={featureBoxStyle}>
              <div class="card-header">
                <h5 style={titleStyle}>Websites</h5>
              </div>
              <div class="card-body" style={cardStyle}>
                <p class="card-text">
                Our web development team creates websites that are up-to-date and tailored just for you. We are here to find the best solutions, working closely with you to achieve your digital goals. We're not just developers; we're your friendly partners in online success.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div class="card text-bg-dark mb-3" style={featureBoxStyle}>
              <div class="card-header">
                <h5 style={titleStyle}>Security</h5>
              </div>
              <div class="card-body" style={cardStyle}>
                <p class="card-text">
                We as penetration testers are committed to safe space and secure web applications. We can meet your website's needs in the security field and help you to grow without any concerns about your website's security.                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div class="card text-bg-dark mb-3" style={featureBoxStyle}>
              <div class="card-header">
                <h5 style={titleStyle}>Software</h5>
              </div>
              <div class="card-body" style={cardStyle}>
                <p class="card-text">
                we're passionate about turning your mobile app ideas into reality. Our team is dedicated to making cutting-edge applications that bring your vision to life. From concept to launch, we're your creative partners in mobile app success.
                </p>
              </div>
            </div>
          </div>
          
        </div>

        </div>
      </div>
  );
};

export default FeatureSection;
