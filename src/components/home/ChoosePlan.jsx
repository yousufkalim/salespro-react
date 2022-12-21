// Init
import * as React from 'react';
import Card from '../common/Card';
import SectionHeader from '../common/SectionHeader';

export default function ChoosePlan() {
  return (
    <div className="choosePlanContainer">
      <SectionHeader
        title="CHOOSE YOUR PLAN"
        subTitle="Affordable pricing plans"
        desp="Whether you are starting your venture or you have a well established sales team, we have
          the right plan for you !"
      />
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
