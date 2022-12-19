/* eslint-disable import/order */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/newline-after-import */
// Init
import * as React from 'react';
import Card from '../common/Card';
export default function ChoosePlan() {
  return (
    <>
      <div className="choosePlanContainer">
        <div className="choosePlanHeadingDiv">
          <p className="choosePlanHeadingTitle">CHOOSE YOUR PLAN</p>
          <p className="choosePlanHeadingSubTitle">Affordable pricing plans</p>
          <p className="choosePlanMiddleHeadingDesp">
            Whether you are starting your venture or you have a well established sales team, we have
            the right plan for you !
          </p>
        </div>
        <div className="choosePlanCardDiv">
          <div className="choosePlanCardSubDiv">
            <Card />
            <Card
              lite
              subTitle="For big companies"
              title="Enterprise"
              desp="For companies willing to scale it up !"
              price="$199+"
            />
          </div>
        </div>
      </div>
    </>
  );
}
