import React from 'react';
import InputField from '../common/InputField';
import Illustration from '../../assets/Illustration.svg';

function Popup() {
  return (
    <div className="main-login-container">
      <div className="main-login-box">
        <h1 className="account-login">Log into your account</h1>
        <div className="inputs">
          <div className="label-input3">
            <InputField label="Full Name" type="text" />
          </div>
          <div className="label-input3">
            <InputField label="Password" type="password" />
            <div className="forgot">
              <p className="forgot-pass">Forgot Password</p>
            </div>
          </div>
        </div>
        <div className="Login-btn-div">Login</div>
        <div className="no-account">
          <p className="no-account-p ">
            You Dont Have account <span className="sign">Sign-Up</span>
          </p>
          <p className="policy">
            By submitting my information, I confirm that I have read and understood the{' '}
            <span className="term">Terms of services</span> &{' '}
            <span className="privacy">Privacy Policy.</span>
          </p>
        </div>
      </div>
      <div className="illustration-div">
        <img className="illustration" src={Illustration} alt="Illustration" />
      </div>
    </div>
  );
}

export default Popup;
