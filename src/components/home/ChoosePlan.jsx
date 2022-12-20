// Init
import * as React from 'react';
import Card from '../common/Card';

export default function ChoosePlan() {
  return (
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
          <Card
            subTitle="For startups"
            title="Monthly"
            desp="For small startups willing to give it a try ! 14-days free trial!"
            price="$49"
          />
          <Card
            lite
            subTitle="For big companies"
            title="Enterprise"
            desp="For companies willing to scale it up!"
            price="$199+"
          />
        </div>
      </div>
    </div>
  );
}
