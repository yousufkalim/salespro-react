/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import WhiteTick from '../../assets/images/white_tick.svg';
import BlueTick from '../../assets/images/blue_tick.svg';

export default function PricingCard(props) {
  return (
    <div className={props.lite ? 'cardContainerPricingLite' : 'pricingCardContainer'}>
      <div className="cardHeaderDiv">
        <div className="cardHeaderTitleDiv">
          <p className={props.lite ? 'cardHeaderTitleLite' : 'cardHeaderTitle'}>
            {props.subTitle ? props.subTitle : 'For startups'}
          </p>
          <p className={props.lite ? 'cardHeaderSubTitleLite' : 'cardHeaderSubTitle'}>
            {props.title ? props.title : 'Monthly'}
          </p>
        </div>
        <div className={props.lite ? 'cardHeaderBadgeLite' : 'cardHeaderBadge'}>Popular</div>
      </div>
      <div className={props.lite ? 'cardHeaderDespLite' : 'cardHeaderDesp'}>
        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
      </div>
      <div className={props.lite ? 'cardPriceDivLite' : 'cardPriceDiv'}>
        {props.price ? props.price : '$49'}
        <span>/monthly </span>
      </div>
      <div className="cardListMainDiv">
        <div className={props.lite ? 'cardListHeadingLite' : 'cardListHeading'}>
          What’s included
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Unlimited SMS</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Auto-Dialing System</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Unlimited Emails</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Unlimited Ringless Voicemails</p>
        </div>

        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Mobile App and Desk Phone</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Call Tracking and Recording</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Pipeline and Opportunity CRM</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Accept and Process Payments</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Calendar and Appointment Manager</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Task Management</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Membership and Training Creation</p>
        </div>
        <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>Workflows and Automation</p>
        </div>
      </div>

      <div className="cardButtonDiv">Get started</div>
    </div>
  );
}
