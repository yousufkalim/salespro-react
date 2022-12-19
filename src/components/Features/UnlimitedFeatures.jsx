/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import WorkflowsBtnIcon from '../../assets/WorkflowsBtnIcon.svg';
import OurFeaturesImg from '../../assets/OurFeaturesImg.svg';

function UnlimitedFeatures() {
  return (
    <div>
      <div className="Unlimiteds">
        <div className="Unlimiteds_center">
          <div className="Unlimiteds_content_div">
            <p className="Unlimiteds_title">But wait, there's more unlimited features</p>
            <p className="Unlimiteds_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu, convallis est sed.
              Proin nulla eu a vitae lectus leo suscipit.
            </p>
          </div>
          <div className="Unlimiteds_navLink">
            <a href="" className="Unlimiteds_links">
              <span className="counting">1</span> SMS
            </a>
            <a href="" className="Unlimiteds_links">
              <span className="counting">2</span> Email
            </a>
            <a href="" className="Unlimiteds_links">
              <span className="counting">3</span> Ringless Voicemails
            </a>
            <a href="" className="Unlimiteds_links">
              <span className="counting">4</span> Website & Funnel Creation
            </a>
          </div>
          <div className="OurFeatures">
            <div className="OurFeatures_center">
              <div className="OurFeatures_col">
                <p className="OurFeatures_p">OUR Features</p>
                <p className="OurFeatures_title">Unlimited SMS</p>
                <p className="OurFeatures_heading">
                  Salespro Direct SMS capabilities allow you to:
                </p>
                <div className="OurFeatures_li_div">
                  <li className="OurFeatures_li">
                    Send unlimited SMS messages to prospects directly through Salespro Direct
                  </li>
                  <li className="OurFeatures_li">Create automated SMS messages</li>
                  <li className="OurFeatures_li">
                    Draft SMS templates to fire out quickly to prospects
                  </li>
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
                <img src={OurFeaturesImg} alt="" className="OurFeatures_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnlimitedFeatures;
