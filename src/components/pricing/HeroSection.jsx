import React from 'react';

import PricingCard from './PlanCard';

function HeroSeciton() {
  return (
    <div>
      <div className="heroPricing">
        <div className="hero_section_pricing">
          <div className="hero_content">
            <p className="hero_sales_pricing">Flexible Pricing Plans</p>
            <p className="hero_sales_title">The best work solution, for the best price.</p>
          </div>
        </div>
        <div className="choosePlanPricingCardDiv">
          <div className="choosePlanPricingCardSubDiv">
            <PricingCard />
            <PricingCard
              lite
              subTitle="For big companies"
              title="Enterprise"
              desp="For companies willing to scale it up !"
              price="$199+"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSeciton;
