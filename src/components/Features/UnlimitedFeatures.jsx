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
  const [showCompnent, setShowCompont] = useState(1);
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
                textLi=" Send unlimited SMS messages to prospects directly through Salespro Direct"
                textLi2="Create automated SMS messages"
                textLi3="Draft SMS templates to fire out quickly to prospects"
                textLi4="Write personalized SMS messages for specific prospects"
                textLi5="Prospect with unlimited outbound SMS campaigns"
                textLi6="Automate your follow up process"
              />
            )}
            {showCompnent === 2 && (
              <OurFeatureStep
                title="Unlimited Email"
                ourP="Salespro Direct allows you to:"
                img={OurFeaturesImg2}
                textLi="Send mass email campaigns"
                textLi2="Manage all your prospect communications in one easy-access location"
                textLi3="Build email templates and create automated email sequences"
                textLi4="Connect your SMTP for custom emails"
                textLi5="Follow our training to start sending 50,000 emails"
              />
            )}

            {showCompnent === 3 && (
              <OurFeatureStep
                title="Unlimited Ringless Voicemails"
                ourP="Using our unlimited ringless voicemail feature you can:"
                img={OurFeaturesImg3}
                textLi="automate your voicemail process (record once and then drop voicemails with one click)"
                textLi2="add ringless voicemails inside automated workflows and"
                textLi3="use during outbound call blitzes to work faster and contact more prospects"
              />
            )}

            {showCompnent === 4 && (
              <OurFeatureStep
                title="Unlimited Website & Funnel Creation"
                ourP="Host both your company website and funnel out of Salespro Direct. Build conversion optimized funnels within minutes that book loads of sales calls with high intent prospects."
                img={OurFeaturesImg4}
                textLi="Simple drag-n-drop page builder"
                textLi2="Dozens of Pre-built Templates"
                textLi3="Capture Leads"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnlimitedFeatures;
