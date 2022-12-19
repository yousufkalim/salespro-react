import React, { useState } from 'react';
import LeftSide from '../components/business/LeftSide';
import RightSide from '../components/business/RightSide';
import RightSide2 from '../components/billingInfo/RightSide';
import Stepper from '../components/stepper/Stepper';

function BusinessInfo() {
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className="main-business-container">
      <LeftSide />
      <div className="stepper-head">
        <div>
          <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
        <div>{step === 0 && <RightSide setStep={setStep} setActiveStep={setActiveStep} />}</div>
        {step === 1 && <RightSide2 />}
      </div>
    </div>
  );
}

export default BusinessInfo;
