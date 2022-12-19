/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import WorkflowsImg from '../../assets/WorkflowsImg.svg';
import WorkflowsBtnIcon from '../../assets/WorkflowsBtnIcon.svg';

function Workflows() {
  return (
    <div>
      <div className="Workflows">
        <div className="Workflows_center">
          <div className="Automation_menu">
            <a href="" className="Automation_links">
              Automation
            </a>
            <a href="" className="Automation_links">
              Auto-Dialing System
            </a>
            <a href="" className="Automation_links">
              Mobile App & Desk Phone
            </a>
            <a href="" className="Automation_links">
              Pipeline & Opportunity CRM
            </a>
            <a href="" className="Automation_links">
              Task Management
            </a>
          </div>
          <img src={WorkflowsImg} alt="" className="Workflows_img" />
          <p className="Workflows_title">Workflows & Automation</p>
          <p className="Workflows_p">
            Salespro Direct offers automations for both email and SMS (so that you don’t have to
            manually follow up with prospects). Similar to Zapier, Salespro Direct allows you to
            automate numerous workflows (which can save salespeople hours of time each day by
            automating their entire follow up process):
          </p>
          <button type="button" className="Workflows_btn">
            Get Started <img src={WorkflowsBtnIcon} alt="" className="Workflows_btnIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Workflows;
