// Init
import React from 'react';
import Hero from '../../assets/images/home_hero.svg';

export default function HomeHero() {
  return (
    <div className="homeHeroContainer">
      <div className="homeHeroLeftDiv">
        <p className="homeHeroTopHeading">THE ALL-IN-ONE CRM FOR SALES TEAM !</p>
        <p className="homeHeroHeading">
          INCREASE SALES BY <span>+25%</span> IN 90 DAYS !
        </p>
        <p className="homeHeroDesp">
          Easily Contact 100+ Prospects Per Hour, Automate Followup Sequences, and Close More Deals.
        </p>
        <div className="homeHeroBtnContainer">
          <div className="homeHeroBtnDiv"> Start Free Trial</div>
        </div>
      </div>
      <div className="homeHerorightDiv">
        <img src={Hero} alt="hero" />
      </div>
    </div>
  );
}
