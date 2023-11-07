import React from 'react';
import HeroSection from '../components/HeroSection';
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
