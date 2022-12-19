/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WorkflowsBtnIcon from '../../assets/WorkflowsBtnIcon.svg';

function OurFeatureStep(props) {
  return (
    <div>
      <div className="OurFeatures_center">
        <div className="OurFeatures_col">
          <p className="OurFeatures_p">OUR Features</p>
          <p className="OurFeatures_title">{props.title}</p>
          <p className="OurFeatures_heading">{props.ourP}</p>
          <div className="OurFeatures_li_div">
            <li className="OurFeatures_li">
              Send unlimited SMS messages to prospects directly through Salespro Direct
            </li>
            <li className="OurFeatures_li">Create automated SMS messages</li>
            <li className="OurFeatures_li">Draft SMS templates to fire out quickly to prospects</li>
            <li className="OurFeatures_li">
              Write personalized SMS messages for specific prospects
            </li>
            <li className="OurFeatures_li">Prospect with unlimited outbound SMS campaigns</li>
            <li className="OurFeatures_li">Automate your follow up process</li>
          </div>
          <button type="button" className="OurFeatures_btn">
            Get Started <img src={WorkflowsBtnIcon} alt="" className="Workflows_btnIcon" />
          </button>
        </div>
        <div className="OurFeatures_col">
          <img src={props.img} alt="" className="OurFeatures_img" />
        </div>
      </div>
    </div>
  );
}

export default OurFeatureStep;
