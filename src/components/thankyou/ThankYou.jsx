import React from 'react';
import Think from '../../assets/Think.svg';

function Thankyou() {
  return (
    <div className="main-pop-container">
      <div className="main-thankyou">
        <h1 className="thankyou">Thank You</h1>
        <div>
          <img className="think" src={Think} alt="asd" />
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
