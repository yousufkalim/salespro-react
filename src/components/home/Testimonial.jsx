// Init
import React from 'react';
import Avatar from '../../assets/images/testimonial_avatar.png';
import Next from '../../assets/images/next.svg';
import Back from '../../assets/images/back.svg';
import SectionHeader from '../common/SectionHeader';
import FreeTrail from '../common/FreeTrail';

export default function ClientTestimonial(props) {
  const { freeTrail } = props;
  return (
    <div className={freeTrail ? 'testimonialContainerBG' : 'testimonialContainer'}>
      <SectionHeader title="BE PART OF THE CHANGE !" subTitle="Client Testimonials" />

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

      {freeTrail && <FreeTrail />}
    </div>
  );
}
