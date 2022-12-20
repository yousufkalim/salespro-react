/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import HeroSection from '../components/Features/HeroSection';
import SalesProOverview from '../components/Features/SalesProOverview';
import Workflows from '../components/Features/Workflows';
import UnlimitedFeatures from '../components/Features/UnlimitedFeatures';
import TrackWins from '../components/Features/TrackWins';
import Footer from './../components/common/Footer';
import Trial from '../components/Features/Trial';
import SecondaryNavbar from './../components/common/SecondaryNavbar';

function Features() {
  React.useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
  };
  React.useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <SecondaryNavbar />
      <HeroSection />
      <SalesProOverview />
      <Workflows />
      <UnlimitedFeatures />
      <TrackWins />
      <Trial />
      <Footer />
    </div>
  );
}

export default Features;
