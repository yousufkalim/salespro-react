// Init
import React from 'react';
import Avatar from '../../assets/images/testimonial_avatar.png';
import Trail from '../../assets/images/free_trail.png';
import Next from '../../assets/images/next.svg';
import Back from '../../assets/images/back.svg';

export default function ClientTestimonial() {
  return (
    <div className="testimonialContainer">
      <div className="choosePlanHeadingDiv">
        <p className="choosePlanHeadingTitle">BE PART OF THE CHANGE !</p>
        <p className="choosePlanHeadingSubTitle">Client Testimonials</p>
      </div>

      <div className="testimonialMainDiv">
        <div className="testimonialFeedbackDiv">
          <p>
            No other eCommerce platform allows people to start for free and grow their store as
            their business grows. More importantly, WooCommerce doesn&apos;t charge you a portion of
            your profits as your business grows!
          </p>
          <div className="testimonialClientDiv">
            <div className="testimonialAvatarDiv">
              <img src={Avatar} alt="avatar" />
            </div>
            <div className="testimonialClientInfo">
              <p className="testimonialClientName">Younus Akram</p>
              <p className="testimonialClientDesig">CEO Creative Studio</p>
            </div>
          </div>
        </div>
        <div className="testimonialFeedbackBtn">
          <img className="testimonialFeedbackBackBtn" src={Back} alt="back" />
          <img className="testimonialFeedbackNextBtn" src={Next} alt="next" />
        </div>
      </div>

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
    </div>
  );
}
