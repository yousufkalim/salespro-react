// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/Navbar';
import HomeHero from '../components/home/HomeHero';
import PopularFeature from '../components/home/PopularFeature';
import ChoosePlan from '../components/home/ChoosePlan';
import MobileApp from '../components/home/MobileApp';
import Footer from '../components/common/Footer';
import OneTool from '../components/home/OneTool';
import ClientTestimonial from '../components/home/Testimonial';
import AskedQuestions from '../components/home/AskedQuestions';

// Home Component
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <PopularFeature />
      <ChoosePlan />
      <MobileApp />
      <OneTool />
      <ClientTestimonial />
      <AskedQuestions />
      <Footer />
    </div>
  );
}
