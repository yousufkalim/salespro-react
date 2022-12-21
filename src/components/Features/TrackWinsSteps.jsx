import React from 'react';

function TrackWinsSteps(props) {
  const { img } = props;
  return (
    <div>
      <div className="TrackWins_box">
        <img src={img} alt="" className="TrackWins_Img" />
        <p className="Workflows_title2">Workflows and Automation</p>
        <p className="Workflows_p">
          Salespro Direct offers automations for both email and SMS (so that you don’t have to
          manually follow up with prospects). Similar to Zapier, Salespro Direct allows you to
          automate numerous workflows (which can save salespeople hours of time each day by
          automating their entire follow up process):
        </p>
      </div>
    </div>
  );
}

export default TrackWinsSteps;
