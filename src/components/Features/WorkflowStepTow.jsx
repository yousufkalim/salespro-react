import React from 'react';
import WorkflowsImg2 from '../../assets/WorkflowsImg2.svg';
import WorkflowsBtnIcon from '../../assets/WorkflowsBtnIcon.svg';

function WorkflowStepTow() {
  return (
    <div>
      <img src={WorkflowsImg2} alt="" className="Workflows_img" />
      <p className="Workflows_title">Auto-Dialing Systemn</p>
      <p className="Workflows_p">
        Salespro Direct offers automations for both email and SMS (so that you don’t have to
        manually follow up with prospects). Similar to Zapier, Salespro Direct allows you to
        automate numerous workflows (which can save salespeople hours of time each day by automating
        their entire follow up process):
      </p>
      <button type="button" className="Workflows_btn">
        Get Started <img src={WorkflowsBtnIcon} alt="" className="Workflows_btnIcon" />
      </button>
    </div>
  );
}

export default WorkflowStepTow;
