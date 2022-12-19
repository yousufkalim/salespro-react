/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import HeroSection from '../components/Features/HeroSection';
import SalesProOverview from '../components/Features/SalesProOverview';
import Workflows from '../components/Features/Workflows';
import UnlimitedFeatures from '../components/Features/UnlimitedFeatures';
import TrackWins from '../components/Features/TrackWins';
import Footer from './../components/common/Footer';
import Traial from '../components/Features/Traial';
import SecondaryNavbar from './../components/common/SecondaryNavbar';

function Features() {
  return (
    <div>
      <SecondaryNavbar />
      <HeroSection />
      <SalesProOverview />
      <Workflows />
      <UnlimitedFeatures />
      <TrackWins />
      <Traial />
      <Footer />
    </div>
  );
}

export default Features;
