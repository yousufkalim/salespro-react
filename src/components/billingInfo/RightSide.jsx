import React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
import { Link } from 'react-router-dom';
import InputField from '../common/InputField';

// const steps = ['Sign Up', 'Business Info', 'Billing', 'Thank You'];

function RightSide() {
  return (
    <div className="right-side-billing">
      {/* <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box> */}
      <h1 className="billing-info">
        Billing information - Essential account ($49/<span>Monthly</span>)
      </h1>
      <div className="flex-row">
        <div className="label-input2">
          <InputField label="Billing First Name" type="text" />
        </div>
        <div className="label-input2">
          <InputField label="Billing Last Name" type="text" />
        </div>
      </div>
      <div className="flex-row">
        <div className="label-input2">
          <InputField label="Company" type="text" />
        </div>
        <div className="label-input2">
          <InputField label="Phone Number" type="tel" />
        </div>
      </div>
      <InputField label="Address" type="text" />
      <div className="flex-row">
        <div className="label-input2">
          <InputField label="Apt/Suite" type="text" />
        </div>
        <div className="label-input2">
          <InputField label="City" type="text" />
        </div>
      </div>
      <div className="flex-row">
        <div className="label-input2">
          <InputField label="State/Province" type="text" />
        </div>
        <div className="label-input2">
          <InputField label="Zip/Postel" type="text" />
        </div>
        <div className="label-input2">
          <InputField label="Country" type="text" />
        </div>
      </div>
      <InputField label="Credit Card" type="tel" />
      <div className="flex-row">
        <div className="label-input2">
          <InputField label="Expiry Date" type="text" />
        </div>
        <div className="label-input2">
          <InputField label="Security code" type="text" />
        </div>
      </div>
      <div className="trial-btn-p">
        <p className="submitting-info">
          By submitting my information, I confirm that I have read and understood the{' '}
          <span className="privacy">Privacy Policy.</span>
        </p>

        <div className="continue-btn-div">
          <Link className="link" to="/thankyou">
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
