/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/newline-after-import */
// Init
import * as React from 'react';
import Logo from '../../assets/images/white_logo.svg';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import TikTok from '../../assets/images/tiktok.svg';
import Youtube from '../../assets/images/youtube.svg';
export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerTopDiv">
          <div className="footerTextDiv">
            <p className="footerHeadingText">
              INCREASE SALES BY 25% OR MORE IN YOUR FIRST 90 DAYS GUARANTEED
            </p>
            <p className="footerDespText">
              Easily Contact 100+ Prospects Per Hour, Automate Followup Sequences, and Close More
              Deals.
            </p>
          </div>
          <div className="footerMenuDiv">
            <div className="footerMenu">
              <p className="footerMenuTitle">Navigate</p>
              <p className="footerMenu">Home</p>
              <p className="footerMenu">Features</p>
              <p className="footerMenu">Pricing</p>
              <p className="footerMenu">About us</p>
            </div>
            <div className="footerMenu">
              <p className="footerMenuTitle">Why Salespro</p>
              <p className="footerMenu">Features</p>
              <p className="footerMenu">Terms and conditions</p>
              <p className="footerMenu">Privacy Policy</p>
            </div>
            <div className="footerMenu">
              <p className="footerMenuTitle">Company Menu</p>
              <p className="footerMenu">About us</p>
              <p className="footerMenu">Enterprise</p>
              <p className="footerMenu">Testimonials</p>
              <p className="footerMenu">Support</p>
            </div>
          </div>
          <div className="footerButtonContainer">
            <div className="footerSignupBtn">Signup</div>
            <div className="footerLoginBtn">Login</div>
          </div>
        </div>

        <div className="footerLogoContainer">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="footerDivider" />
      <div className="footerBottomContainer">
        <div className="footerCopyrightDiv">
          © 2020 <span> Salespro Direct </span> All Rights Reserved.
        </div>
        <div className="footerSocialIconsDiv">
          <img className="footerSocialIcon" src={Facebook} alt="Facebook" />
          <img className="footerSocialIcon" src={Instagram} alt="Instagram" />
          <img className="footerSocialIcon" src={TikTok} alt="TikTok" />
          <img className="footerSocialIcon" src={Youtube} alt="Youtube" />
        </div>
      </div>
    </>
  );
}
