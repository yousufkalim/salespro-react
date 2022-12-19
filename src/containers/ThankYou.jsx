import React from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Thankyou from '../components/thankyou/ThankYou';

function ThankYou() {
  return (
    <div className="main-container-thankyou">
      <Navbar />
      <Thankyou />
      <Footer />
    </div>
  );
}

export default ThankYou;
