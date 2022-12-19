/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Trail from '../../assets/images/free_trail.png';

function Trial() {
  return (
    <div className="">
      <div className="StopWasting">
        <div className="testimonialFreeTrialTextDiv">
          <h2>Stop wasting time with manual outreach.</h2>
          <p>
            Salespro Direct takes less than 5 minutes to setup, allows you to work 10x as fast, and
            will increase sales from Day 1
          </p>
          <div className="testimonialFreeTrialBtn">Start Free Trial</div>
        </div>
        <div className="testimonialFreeTrialImgDiv">
          <img src={Trail} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Trial;
