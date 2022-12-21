/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import TrackWinsSteps from './TrackWinsSteps';
import TrackWinsImg from '../../assets/TrackWinsImg.svg';
import TrackWinsImg2 from '../../assets/TrackWinsImg2.svg';

const liMenu = [
  { liText: 'Membership & Training Creation' },
  { liText: 'Reviews & Reputation Management' },
  { liText: 'Website Chat' },
  { liText: 'Missed Call Text Back' },
  { liText: 'Social Media Manager' },
  { liText: 'Google & Facebook Ad Monitoring' },
  { liText: 'VIP Support & Training Library' },
  { liText: 'Compliance Coverage' },
  { liText: 'Bonus' },
];

function TrackWins() {
  const [showComponent, setShowComponent] = useState(0);
  const handleClick = (i) => {
    setShowComponent(i);
  };
  return (
    <div>
      <div className="TrackWins">
        <div className="TrackWins_center">
          <p className="TrackWins_title">Set clear targets to track wins</p>
          <div className="TrackWins_container">
            <div className="TrackWins_col">
              <div className="TrackWins_li_div">
                {liMenu.map((val, i) => (
                  <li
                    className={i === showComponent ? 'TrackWins_li2' : 'TrackWins_li'}
                    onClick={() => handleClick(i)}
                    onKeyDown={handleClick}
                  >
                    {val.liText}
                  </li>
                ))}
              </div>
            </div>
            <div className="TrackWins_col2">
              {showComponent === 0 && <TrackWinsSteps img={TrackWinsImg2} />}
              {showComponent === 1 && <TrackWinsSteps img={TrackWinsImg} />}
              {showComponent === 2 && <TrackWinsSteps img={TrackWinsImg} />}
              {showComponent === 3 && <TrackWinsSteps img={TrackWinsImg} />}
              {showComponent === 4 && <TrackWinsSteps img={TrackWinsImg} />}
              {showComponent === 5 && <TrackWinsSteps img={TrackWinsImg} />}
              {showComponent === 6 && <TrackWinsSteps img={TrackWinsImg} />}
              {showComponent === 7 && <TrackWinsSteps img={TrackWinsImg} />}
              {showComponent === 8 && <TrackWinsSteps img={TrackWinsImg} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackWins;
