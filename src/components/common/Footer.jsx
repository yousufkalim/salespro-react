// Init
import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/white_logo.svg';
// import Facebook from '../../assets/images/facebook.svg';
// import Instagram from '../../assets/images/instagram.svg';
// import TikTok from '../../assets/images/tiktok.svg';
// import Youtube from '../../assets/images/youtube.svg';
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
              <Link to="/" className="footerMenu">
                Home
              </Link>
              <Link to="/pricing" className="footerMenu">
                Pricing
              </Link>
              <Link to="/features" className="footerMenu">
                Features
              </Link>
              <Link to="/" className="footerMenu">
                About us
              </Link>
            </div>
            <div className="footerMenu">
              <p className="footerMenuTitle">Why Salespro</p>
              <Link to="/features" className="footerMenu">
                Features
              </Link>
              <Link to="/" className="footerMenu">
                Terms and conditions
              </Link>
              <Link to="/" className="footerMenu">
                Privacy Policy
              </Link>
            </div>
            <div className="footerMenu">
              <p className="footerMenuTitle">Company Menu</p>
              <Link to="/" className="footerMenu">
                About us
              </Link>
              <Link to="/enterprise" className="footerMenu">
                Enterprise
              </Link>
              <Link to="/" className="footerMenu">
                Testimonials
              </Link>
              <Link to="/contactus" className="footerMenu">
                Support
              </Link>
            </div>
          </div>
          <div className="footerButtonContainer">
            <Link to="/signup" className="footerSignupBtn">
              Signup
            </Link>
            <Link to="/login" className="footerLoginBtn">
              Login
            </Link>
          </div>
        </div>

        <div className="footerLogoContainer">
          <Link to="/" className="footerLogoDiv">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="footerDivider" />
      <div className="footerBottomContainer">
        <div className="footerCopyrightDiv">
          © {new Date().getFullYear()} <span> Salespro Direct </span> All Rights Reserved.
        </div>
        {/* <div className="footerSocialIconsDiv">
          <img className="footerSocialIcon" src={Facebook} alt="Facebook" />
          <img className="footerSocialIcon" src={Instagram} alt="Instagram" />
          <img className="footerSocialIcon" src={TikTok} alt="TikTok" />
          <img className="footerSocialIcon" src={Youtube} alt="Youtube" />
        </div> */}
      </div>
    </>
  );
}
