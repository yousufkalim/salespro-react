// Init
import React from 'react';
import Trail from '../../assets/images/free_trail.png';

export default function FreeTrail() {
  return (
    <div className="testimonialFreeTrialDiv">
      <div className="testimonialFreeTrialTextDiv">
        <h2>Stop wasting time with manual outreach.</h2>
        <p>
          Salespro Direct takes less than 5 minutes to setup, allows you to work 10x as fast, and
          will increase sales from Day 1
        </p>
        <div className="testimonialFreeTrialBtn">Start Free Trial</div>
      </div>
      <div className="testimonialFreeTrialImgDiv">
        <img src={Trail} alt="Trail" />
      </div>
    </div>
  );
}
