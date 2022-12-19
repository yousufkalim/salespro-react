import React from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import PopUp from '../components/signup/PopUp';

function SignUp() {
  return (
    <div className="main-container-popup">
      <Navbar />
      <PopUp />
      <Footer />
    </div>
  );
}

export default SignUp;
