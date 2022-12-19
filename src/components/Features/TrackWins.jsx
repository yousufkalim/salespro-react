import React from 'react';
import TrackWinsImg from '../../assets/TrackWinsImg.svg';

function TrackWins() {
  return (
    <div>
      <div className="TrackWins">
        <div className="TrackWins_center">
          <p className="TrackWins_title">Set clear targets to track wins</p>
          <div className="TrackWins_container">
            <div className="TrackWins_col">
              <div className="TrackWins_li_div">
                <li className="TrackWins_li">Membership & Training Creation</li>
                <li className="TrackWins_li">Reviews & Reputation Management</li>
                <li className="TrackWins_li">Website Chat</li>
                <li className="TrackWins_li">Missed Call Text Back</li>
                <li className="TrackWins_li">Social Media Manager</li>
                <li className="TrackWins_li">Google & Facebook Ad Monitoring</li>
                <li className="TrackWins_li">VIP Support & Training Library</li>
                <li className="TrackWins_li">Compliance Coverage</li>
                <li className="TrackWins_li">Bonus</li>
              </div>
            </div>
            <div className="TrackWins_col2">
              <img src={TrackWinsImg} alt="" className="TrackWins_Img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackWins;
