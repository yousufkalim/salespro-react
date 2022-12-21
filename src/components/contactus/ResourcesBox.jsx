// Init
import React from 'react';

export default function ResourcesBox(props) {
  const { Icon, heading, desp } = props;
  return (
    <div className="contactUsContentBox">
      <div className="contactUsContentBoxIconDiv">
        <div className="contactUsContentBoxIcon">{Icon}</div>
      </div>
      <div className="contactUsContentBoxText">
        <h2>{heading}</h2>
        <p>{desp}</p>
      </div>
    </div>
  );
}
