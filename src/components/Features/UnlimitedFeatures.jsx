/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import OurFeatureStep from './OurFeatureStep';
import OurFeaturesImg from '../../assets/OurFeaturesImg.svg';
import OurFeaturesImg2 from '../../assets/OurFeaturesImg2.svg';
import OurFeaturesImg3 from '../../assets/OurFeaturesImg3.svg';
import OurFeaturesImg4 from '../../assets/OurFeaturesImg4.svg';

const sliderName = [
  {
    id: 1,
    link: 'SMS',
  },
  {
    id: 2,
    link: 'Email',
  },
  {
    id: 3,
    link: 'Ringless Voicemails',
  },
  {
    id: 4,
    link: 'Website & Funnel Creation',
  },
];

function UnlimitedFeatures() {
  const [showCompnent, setShowCompont] = useState(0);
  // const [activeId, setActiveId] = useState(1);

  const nextStepsEvent = (i) => {
    setShowCompont(i);
  };
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
            {sliderName.map((navValue) => (
              <div
                id={navValue?.id}
                className={
                  navValue?.id === showCompnent ? 'active_unlimied_links' : 'Unlimiteds_links'
                }
                onClick={() => nextStepsEvent(navValue?.id)}
                onKeyDown={nextStepsEvent}
              >
                <span className="counting">{navValue.id}</span> {navValue.link}
              </div>
            ))}
          </div>
          <div className="OurFeatures">
            {showCompnent === 1 && (
              <OurFeatureStep
                title="Unlimited SMS"
                ourP="Salespro Direct SMS capabilities allow you to:"
                img={OurFeaturesImg}
              />
            )}
            {showCompnent === 2 && (
              <OurFeatureStep
                title="Unlimited Email"
                ourP="Salespro Direct allows you to:"
                img={OurFeaturesImg2}
              />
            )}
            {showCompnent === 3 && (
              <OurFeatureStep
                title="Unlimited Ringless Voicemails"
                ourP="Using our unlimited ringless voicemail feature you can:"
                img={OurFeaturesImg3}
              />
            )}
            {showCompnent === 4 && (
              <OurFeatureStep
                title="Unlimited Website & Funnel Creation"
                ourP="Host both your company website and funnel out of Salespro Direct. Build conversion optimized funnels within minutes that book loads of sales calls with high intent prospects."
                img={OurFeaturesImg4}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnlimitedFeatures;
