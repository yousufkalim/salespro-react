import React from 'react';
import IntegratedIcon from '../../assets/IntegratedIcon.svg';
import IntegratedImg from '../../assets/IntegratedImg.svg';
import CheckAroow from '../../assets/CheckAroow.svg';
import CheckIcon from '../../assets/CheckIcon.svg';
import TrackingRightImg from '../../assets/TrackingRightImg.svg';
import MailImg from '../../assets/MailImg.svg';
import PhoneImg from '../../assets/PhoneImg.svg';

function SalesProOverview() {
  return (
    <div>
      <div className="overview">
        <div className="center">
          {/* content div  */}
          <div className="overview_content">
            <p className="overview_title">SalesPro Overview</p>
            <p className="overview_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu, convallis est sed.
              Proin nulla eu a vitae lectus leo suscipit.
            </p>
          </div>
          {/* content div  */}

          {/* Integrated  */}
          <div className="Integrated">
            <div className="Integrated_center">
              <div className="Integrated_col1">
                <img src={IntegratedIcon} alt="" className="Integrated_icon" />
                <p className="Integrated_title">Integrated CRM</p>
                <p className="Integrated_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut l
                </p>
                <button type="button" className="Integrated_btn">
                  Check More
                </button>
              </div>
              <div className="Integrated_col2">
                <div className="Integrated_img_div">
                  <img src={IntegratedImg} alt="" className="Integrated_img" />
                </div>
              </div>
            </div>
          </div>
          {/* Integrated  */}

          {/* Tracking  */}
          <div className="Tracking">
            <div className="Tracking_center">
              <div className="Tracking_col">
                <div className="Tracking_box">
                  <div className="Tracking_box_content">
                    <img src={CheckIcon} alt="" className="Integrated_icon" />
                    <p className="Integrated_title2">Call Tracking & Recording</p>
                    <p className="Integrated_p">
                      Salespro Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor
                      <span className="check_more_btn">
                        Check More <img src={CheckAroow} alt="" className="checkArrow" />
                      </span>
                    </p>
                  </div>
                  <div className="Tracking_right_img_div">
                    <img src={TrackingRightImg} alt="" className="Tracking_right_img" />
                  </div>
                </div>
                <div className="Tracking_box2">
                  <div className="Tracking_box_content">
                    <img src={MailImg} alt="" className="Integrated_icon" />
                    <p className="Integrated_title2">Call Tracking & Recording</p>
                    <p className="Integrated_p">
                      Salespro Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor
                      <span className="check_more_btn">
                        Check More <img src={CheckAroow} alt="" className="checkArrow" />
                      </span>
                    </p>
                  </div>
                  <div className="Tracking_right_img_div">
                    <img src={TrackingRightImg} alt="" className="Tracking_right_img" />
                  </div>
                </div>
              </div>
              <div className="Tracking_col2">
                <div className="Tracking_box3">
                  <div className="Tracking_box_content2">
                    <img src={PhoneImg} alt="" className="Integrated_icon" />
                    <p className="Integrated_title2">Call Tracking & Recording</p>
                    <p className="Integrated_p">
                      Salespro Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor
                      <span className="check_more_btn">
                        Check More <img src={CheckAroow} alt="" className="checkArrow" />
                      </span>
                    </p>
                  </div>
                  <div className="Tracking_right_img_div2">
                    <img src={TrackingRightImg} alt="" className="Tracking_right_img2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tracking  */}
        </div>
      </div>
    </div>
  );
}

export default SalesProOverview;
