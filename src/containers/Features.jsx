import React from 'react';
import HeroSeciton from '../components/Features/HeroSeciton';
import SalesProOverview from '../components/Features/SalesProOverview';
import Workflows from '../components/Features/Workflows';
import UnlimitedFeatures from '../components/Features/UnlimitedFeatures';
import TrackWins from '../components/Features/TrackWins';

function Features() {
  return (
    <div>
      <HeroSeciton />
      <SalesProOverview />
      <Workflows />
      <UnlimitedFeatures />
      <TrackWins />
    </div>
  );
}

export default Features;
