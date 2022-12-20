// Init
import React from 'react';
import OneToolImage from '../../assets/images/one_tool.svg';

export default function OneTool() {
  return (
    <div className="oneToolContainer">
      <div className="choosePlanHeadingDiv">
        <p className="choosePlanHeadingTitle">ALL-IN-ONE TOOL</p>
        <p className="choosePlanHeadingSubTitle">Reduce your Sales tools budget by 97% !</p>
      </div>
      <div className="oneToolContentDiv">
        <div className="oneToolInfoBoxLeft">
          <p>Per Month</p>
          <div style={{ position: 'relative', margin: '2% 0' }}>
            <h1>$1,736</h1>
            <div className="oneToolCross" />
          </div>
          <h2>Avg. Sales Pro Spend a month on a combined software</h2>
        </div>
        <div className="oneToolImgDiv">
          <img src={OneToolImage} alt="onwtool" />
        </div>
        <div className="oneToolInfoBoxRight">
          <div style={{ position: 'relative', margin: '2% 0' }}>
            <h1>$1,736</h1>
            <div className="oneToolCrossRight" />
          </div>
          <p>Limited Time offer</p>
          <h2>
            $49 <span>/ Month</span>{' '}
          </h2>
        </div>
        <div className="oneToolInfoBoxMob">
          <div className="oneToolInfoBoxLeftMob">
            <p>Per Month</p>
            <div style={{ position: 'relative', margin: '2% 0' }}>
              <h1>$1,736</h1>
              <div className="oneToolCross" />
            </div>
            <h2>Avg. Sales Pro Spend a month on a combined software</h2>
          </div>
          <div className="oneToolInfoBoxRightMob">
            <div style={{ position: 'relative', margin: '2% 0' }}>
              <h1>$1,736</h1>
              <div className="oneToolCrossRight" />
            </div>
            <p>Limited Time offer</p>
            <h2>
              $49 <span>/ Month</span>{' '}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
