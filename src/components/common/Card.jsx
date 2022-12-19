/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/order */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/newline-after-import */
// Init
import * as React from 'react';
import Icon from '../../assets/images/card_icon.svg';
import IconLite from '../../assets/images/card_icon1.svg';
import BlueTick from '../../assets/images/blue_tick.svg';
import WhiteTick from '../../assets/images/white_tick.svg';
export default function BasicCard(props) {
  return (
    <>
      <div className={props.lite ? 'cardContainerLite' : 'cardContainer'}>
        <div className="cardHeaderDiv">
          <div className="cardHeaderIconDiv">
            <img src={props.lite ? IconLite : Icon} alt="icon" />
          </div>
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
          {props.desp
            ? props.desp
            : 'For small startups willing to give it a try ! 14-days free trial !'}
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
            <p>All analytics features</p>
          </div>
          <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
            <div className="cardListIconDiv">
              <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
            </div>
            <p>All analytics features</p>
          </div>
          <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
            <div className="cardListIconDiv">
              <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
            </div>
            <p>All analytics features</p>
          </div>
          <div className={props.lite ? 'cardListDivLite' : 'cardListDiv'}>
            <div className="cardListIconDiv">
              <img src={props.lite ? WhiteTick : BlueTick} alt="tick" />
            </div>
            <p>All analytics features</p>
          </div>
        </div>

        <div className="cardButtonDiv">Get started</div>
      </div>
    </>
  );
}
