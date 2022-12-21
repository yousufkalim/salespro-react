import React from 'react';
import Footer from '../components/common/Footer';
import SecondaryNavbar from '../components/common/SecondaryNavbar';
import PopUp from '../components/signup/PopUp';

function SignUp() {
  return (
    <div className="main-container-popup">
      <SecondaryNavbar />
      <PopUp />
      <Footer />
    </div>
  );
}

export default SignUp;
