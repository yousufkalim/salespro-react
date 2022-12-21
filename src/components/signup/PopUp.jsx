import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../common/InputField';

function PopUp() {
  return (
    <div className="main-pop-container">
      <div className="main-pop">
        <h1>Sign up</h1>
        <div className="all-inputs">
          <div className="label-input">
            <InputField label="Full Name" type="text" />
          </div>
          <div className="label-input">
            <InputField label="Phone" type="tel" />
          </div>
          <div className="label-input">
            <InputField label="Email" type="email" />
          </div>
          <div className="label-input">
            <InputField label="Country" type="text" />
          </div>
          <div className="label-input">
            <InputField label="Password" type="password" />
          </div>
          <div className="label-input">
            <InputField label="Re-enter Password" type="password" />
          </div>
        </div>
        <p className="login-sentence">
          You Have account{' '}
          <Link className="link" to="/login">
            <span className="login">Login</span>
          </Link>
        </p>
        <div className="reg-btn-p">
          <p className="submitting-info">
            By submitting my information, I confirm that I have read and understood the{' '}
            <span className="privacy">Privacy Policy.</span>
          </p>
          <div className="registerBtnDiv">
            <Link className="link" to="/businessinfo">
              {' '}
              Register{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
