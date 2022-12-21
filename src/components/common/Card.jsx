// Init
import * as React from 'react';
import Icon from '../../assets/images/card_icon.svg';
import IconLite from '../../assets/images/card_icon1.svg';
import BlueTick from '../../assets/images/blue_tick.svg';
import WhiteTick from '../../assets/images/white_tick.svg';

export default function BasicCard(props) {
  const { lite, subTitle, title, desp, price } = props;
  return (
    <div className={lite ? 'cardContainerLite' : 'cardContainer'}>
      <div className="cardHeaderDiv">
        <div className="cardHeaderIconDiv">
          <img src={lite ? IconLite : Icon} alt="icon" />
        </div>
        <div className="cardHeaderTitleDiv">
          <p className={lite ? 'cardHeaderTitleLite' : 'cardHeaderTitle'}>{subTitle}</p>
          <p className={lite ? 'cardHeaderSubTitleLite' : 'cardHeaderSubTitle'}>{title}</p>
        </div>
        <div className={lite ? 'cardHeaderBadgeLite' : 'cardHeaderBadge'}>Popular</div>
      </div>
      <div className={lite ? 'cardHeaderDespLite' : 'cardHeaderDesp'}>{desp}</div>
      <div className={lite ? 'cardPriceDivLite' : 'cardPriceDiv'}>
        {price}
        <span>/monthly </span>
      </div>
      <div className="cardListMainDiv">
        <div className={lite ? 'cardListHeadingLite' : 'cardListHeading'}>What’s included</div>
        <div className={lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>All analytics features</p>
        </div>
        <div className={lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>All analytics features</p>
        </div>
        <div className={lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>All analytics features</p>
        </div>
        <div className={lite ? 'cardListDivLite' : 'cardListDiv'}>
          <div className="cardListIconDiv">
            <img src={lite ? WhiteTick : BlueTick} alt="tick" />
          </div>
          <p>All analytics features</p>
        </div>
      </div>

      <div className="cardButtonDiv">Get started</div>
    </div>
  );
}
