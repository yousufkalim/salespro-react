/* eslint-disable import/no-useless-path-segments */
// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from '../containers/Home';
import Features from './../containers/Features';
import Pricing from './../containers/Pricing';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}
export default Index;
