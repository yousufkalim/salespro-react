import React from 'react';
import Footer from '../components/common/Footer';
import SecondaryNavbar from '../components/common/SecondaryNavbar';
import Thankyou from '../components/thankyou/ThankYou';

function ThankYou() {
  return (
    <div className="main-container-thankyou">
      <SecondaryNavbar />
      <Thankyou />
      <Footer />
    </div>
  );
}

export default ThankYou;
