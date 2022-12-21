import React from 'react';
import InputField from '../common/InputField';
import Attatchment from '../../assets/Attatchment.svg';
import Person from '../../assets/Person.svg';
import Glitter from '../../assets/GlitterIcon.svg';
import Environment from '../../assets/EnvironmentIcon.svg';
import Badge from '../../assets/BadgeIcon.svg';
import Ai from '../../assets/Ai.svg';
import BMW from '../../assets/BMW.svg';
import PaperLane from '../../assets/PaperLane.svg';
import Times from '../../assets/Times.svg';
import Tishman from '../../assets/Tishman.svg';

function Popup() {
  return (
    <div className="main-login-container">
      <div className="main-pop">
        <h1>Enterprise Representative</h1>
        <div className="all-inputs">
          <div className="label-input">
            <InputField label="Full name" type="text" />
          </div>
          <div className="label-input">
            <InputField label="Phone" type="tel" />
          </div>
          <div className="label-input">
            <InputField label="Email" type="email" />
          </div>
          <div className="label-input">
            <InputField label="What role are you applying for?" type="text" />
          </div>
          <div className="label-input">
            <InputField label="Where did you hear about SalesPro Direct?" type="text" />
          </div>
          <div className="label-input">
            <InputField label="What is your ideal yearly wage?" type="text" />
          </div>
        </div>
        <div className="attatchment">
          <div className="attatchment-div">
            <img src={Attatchment} alt="" />
          </div>
          Add Any Attachment
        </div>
        <div className="contact-btn-p">
          <div className="policy-div">
            <p className="policy">
              By submitting my information, I confirm that I have read and understood the{' '}
              <span className="term">Terms of services</span> &{' '}
              <span className="privacy">Privacy Policy.</span>
            </p>
          </div>
          <div className="contact-btn-div">
            Contact Sales
            <div className="person-div">
              <img src={Person} alt="person" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-left">
        <p className="contact">Contact sales</p>
        <div className="help-div">
          {
            // eslint-disable-next-line
            <h1 className="help">We're here to help.</h1>
          }
          <p className="help-p">
            we created a solution based around all of the tools a direct salesperson would need
            across multiple industries. One that allows them to get in front of their prospects,
            move tacross the board.{' '}
          </p>
        </div>
        <h3 className="love-salepro">See why user love using SalesPro.</h3>
        <div className="main-glitter">
          <div className="glitter-div">
            <img src={Glitter} alt="" />
            <p className="custom">Custom onboarding & implementation plans</p>
          </div>
          <div className="glitter-div">
            <img src={Environment} alt="" />
            <p className="custom">Demo environments & account setup</p>
          </div>
          <div className="glitter-div">
            <img src={Badge} alt="" />
            <p className="custom">Special pricing & offers</p>
          </div>
        </div>
        <h3 className="join">Join 80,000+ highly productive teams</h3>
        <div className="associated-brands">
          <img className="brands" src={Ai} alt="Ai" />
          <img className="brands" src={BMW} alt="BMW" />
          <img className="brands" src={PaperLane} alt="PaperLane" />
          <img className="brands" src={Times} alt="Times" />
          <img className="brands" src={Tishman} alt="Tishman" />
        </div>
      </div>
    </div>
  );
}

export default Popup;
