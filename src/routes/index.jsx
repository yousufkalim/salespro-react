/* eslint-disable import/no-useless-path-segments */
// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from '../containers/Home';
import Features from './../containers/Features';
import Pricing from './../containers/Pricing';
import SignUp from '../containers/SignUp';
import BusinessInfo from '../containers/BusinessInfo';
// import BillingInfo from '../containers/BillingInfo';
import ThankYou from '../containers/ThankYou';
import Login from '../containers/Login';
import ContactUs from '../containers/ContactUs';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/businessinfo" element={<BusinessInfo />} />
      {/* <Route path="/billinginfo" element={<BillingInfo />} /> */}
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
}
export default Index;
