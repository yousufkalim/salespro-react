import React from 'react';
import whiteLogo from '../../assets/images/white_logo.svg';

function LeftSide() {
  return (
    <div className="left-side">
      <div className="white-log-div">
        <img className="white-logo" src={whiteLogo} alt="" />
      </div>
      <div className="leftSide-tagline-div">
        <h3>The best work solution, for the best price.</h3>
      </div>
    </div>
  );
}

export default LeftSide;
