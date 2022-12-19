/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import HeroSeciton from '../components/Features/HeroSeciton';
import SalesProOverview from '../components/Features/SalesProOverview';
import Workflows from '../components/Features/Workflows';
import UnlimitedFeatures from '../components/Features/UnlimitedFeatures';
import TrackWins from '../components/Features/TrackWins';
import Navbar from '../components/common/Navbar';
import Footer from './../components/common/Footer';
import StopWasting from './../components/Features/StopWasting';

function Features() {
  return (
    <div>
      <Navbar />
      <HeroSeciton />
      <SalesProOverview />
      <Workflows />
      <UnlimitedFeatures />
      <TrackWins />
      <StopWasting />
      <Footer />
    </div>
  );
}

export default Features;
