import React from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Popup from '../components/login/Popup';

function Login() {
  return (
    <div className="main-login">
      <Navbar />
      <Popup />;
      <Footer />
    </div>
  );
}

export default Login;
