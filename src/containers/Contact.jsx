import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Popup from '../components/contact/Popup';

function Contact() {
  return (
    <div className="main-contact">
      <Navbar btn />
      <Popup />
      <Footer />
    </div>
  );
}

export default Contact;
