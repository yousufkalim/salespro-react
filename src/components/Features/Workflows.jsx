/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
// import Slider from "react-slick";
import WorkflowStep from './WorkflowStep';
import WorkflowStepTow from './WorkflowStepTow';

function Workflows() {
  const [showCompnent, setShowCompont] = useState(0);
  const handleClick = (i) => {
    setShowCompont(i);
  };
  return (
    <div>
      <div className="Workflows">
        <div className="Workflows_center">
          <div className="Automation_menu">
            <div
              className="Automation_links"
              onClick={() => handleClick(0)}
              onKeyDown={handleClick}
            >
              Automation
            </div>
            <div
              className="Automation_links"
              onClick={() => handleClick(1)}
              onKeyDown={handleClick}
            >
              Auto-Dialing System
            </div>
            <div
              className="Automation_links"
              onClick={() => handleClick(2)}
              onKeyDown={handleClick}
            >
              Mobile App & Desk Phone
            </div>
            <div
              className="Automation_links"
              onClick={() => handleClick(3)}
              onKeyDown={handleClick}
            >
              Pipeline & Opportunity CRM
            </div>
            <div
              className="Automation_links"
              onClick={() => handleClick(4)}
              onKeyDown={handleClick}
            >
              Task Management
            </div>
          </div>
          {showCompnent === 0 && <WorkflowStep />}
          {showCompnent === 1 && <WorkflowStepTow />}
          {showCompnent === 2 && '3'}
          {showCompnent === 3 && '4'}
          {showCompnent === 4 && '5'}
        </div>
      </div>
    </div>
  );
}

export default Workflows;
