// Init
import React from 'react';

// Importing Components
import Navbar from '../components/common/SecondaryNavbar';
import HeroSection from '../components/pricing/HeroSection';
import Footer from '../components/common/Footer';
import PricingTable from '../components/pricing/Table';

// Home Component
export default function Home() {
  return (
    <div>
      <Navbar btn />
      <HeroSection />
      <PricingTable />
      <Footer />
    </div>
  );
}
