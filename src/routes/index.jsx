/* eslint-disable import/no-useless-path-segments */
// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from '../containers/Home';
import Features from './../containers/Features';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}
export default Index;
