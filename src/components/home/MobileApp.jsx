// Init
import * as React from 'react';
import RightImage from '../../assets/images/mobile_section.svg';
import Tick from '../../assets/images/blue_tick.svg';
import Google from '../../assets/images/google_store.png';
import Apple from '../../assets/images/apple_store.png';
import SectionHeader from '../common/SectionHeader';

export default function MobileApp() {
  return (
    <div className="MobileAppContainer">
      <SectionHeader title="MOBILE APP" subTitle="Moving Fast for Better Sales" />
      <div className="MobileAppMainDiv">
        <div className="MobileAppLeftDiv">
          <div className="MobileAppTitle">
            You’ll never have to worry about missing out on a potential deal again due to travel.
          </div>
          <p className="MobileAppListtext">
            All For 15 Software in 1 for just <span>$49</span>{' '}
          </p>
          <div className="MobileAppListDiv">
            <div className="MobileAppListIcon">
              <img src={Tick} alt="icon" />
            </div>
            <p>Make a call</p>
          </div>
          <div className="MobileAppListDiv">
            <div className="MobileAppListIcon">
              <img src={Tick} alt="icon" />
            </div>
            <p>Send a text</p>
          </div>
          <div className="MobileAppListDiv">
            <div className="MobileAppListIcon">
              <img src={Tick} alt="icon" />
            </div>
            <p>Check an email</p>
          </div>
          <div className="MobileAppListDiv">
            <div className="MobileAppListIcon">
              <img src={Tick} alt="icon" />
            </div>
            <p>Reference your notes</p>
          </div>
          <div className="MobileAppStoreDiv">
            <div className="MobileAppStoreImgDiv">
              <img src={Apple} alt="apple" />
            </div>
            <div className="MobileAppStoreImgDiv">
              <img src={Google} alt="google" />
            </div>
          </div>
        </div>
        <div className="MobileAppRightDiv">
          <img src={RightImage} alt="RightMobile" />
        </div>
      </div>
    </div>
  );
}
