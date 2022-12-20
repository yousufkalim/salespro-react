import React from 'react';
import LeftSide from '../components/business/LeftSide';
import RightSide from '../components/billingInfo/RightSide';

function BillingInfo() {
  return (
    <div className="main-business-container">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default BillingInfo;
