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
            <li className="OurFeatures_li">{props.textLi}</li>
            {props.textLi2 && <li className="OurFeatures_li">{props.textLi2}</li>}
            {props.textLi3 && <li className="OurFeatures_li">{props.textLi3}</li>}
            {props.textLi4 && <li className="OurFeatures_li">{props.textLi4}</li>}
            {props.textLi5 && <li className="OurFeatures_li">{props.textLi5}</li>}
            {props.textLi6 && <li className="OurFeatures_li">{props.textLi6}</li>}
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
