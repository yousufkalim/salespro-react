/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
import Design from '../../assets/Design.svg';
import Design2 from '../../assets/Design2.svg';
import circle from '../../assets/CheckCircle.svg';

// const steps = ['Sign Up', 'Business Info', 'Billing', 'Thank You'];

function RightSide({ setStep, setActiveStep }) {
  return (
    <div className="right-side">
      {/* <Stepper /> */}
      {/* <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box> */}
      <div className="grey-box">
        <div className="row-data">
          <div className="Design-div">
            <div>
              <img src={Design} alt="design" />
            </div>
            <div className="startups-div">
              <p className="startup">For Startups</p>
              <h3 className="monthly">Monthly</h3>
            </div>
          </div>
          <p className="monthly-p">
            <span className="amount">$49</span> /monthly
          </p>
        </div>
        <p>For companies willing to scale it up !</p>
        <h4 className="included">What’s included</h4>
        <div className="row-data-2">
          <div>
            <div className="featrues">
              <div>
                <img src={circle} alt="" />
              </div>
              <p className="feature">All analytics features</p>
            </div>
            <div className="featrues">
              <div>
                <img src={circle} alt="" />
              </div>
              <p className="feature">Up to 250,000 tracked</p>
            </div>
            <div className="featrues">
              <div>
                <img src={circle} alt="" />
              </div>
              <p className="feature">Up to 250,000 tracked</p>
            </div>
          </div>
          <div>
            <div className="featrues">
              <div>
                <img src={circle} alt="" />
              </div>
              <p className="feature">Normal support</p>
            </div>
            <div className="featrues">
              <div>
                <img src={circle} alt="" />
              </div>
              <p className="feature">Up to 3 team members</p>
            </div>
            <div className="featrues">
              <div>
                <img src={circle} alt="" />
              </div>
              <p className="feature">All analytics features</p>
            </div>
          </div>
        </div>
        <div className="right-continue">
          {
            // eslint-disable-next-line
            <div
              className="continue-btn-div"
              onClick={() => {
                setStep(1);
                setActiveStep(2);
              }}
            >
              Continue
            </div>
          }
        </div>
      </div>
      <div className="orange-box">
        <div className="row-data">
          <div className="Design-div">
            <div>
              <img src={Design2} alt="design2" />
            </div>
            <div className="startups-div">
              <p className="startup">For Startups</p>
              <h3 className="enterprice">Enterprice</h3>
            </div>
          </div>
          <p className="monthly-p2">
            <span className="amount">$199+</span> /monthly
          </p>
        </div>
        <div className="right-continue">
          {
            // eslint-disable-next-line
            <div
              className="continue-btn-div"
              onClick={() => {
                setStep(1);
                setActiveStep(2);
              }}
            >
              Go To Details
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default RightSide;
