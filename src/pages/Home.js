import React from 'react';
import HeroSection from '../components/HeroSection'; // Adjust the relative path
import FeatureSection from '../components/FeatureSection';
import FormComponent from '../components/FormComponent';


function Home() {
  return (
    <div>
      <HeroSection /> {/* Include the HeroSection component here */}
      {/* Other content for your home page */}
      <FeatureSection />
      <FormComponent />
      
    </div>
  );
}

export default Home;
