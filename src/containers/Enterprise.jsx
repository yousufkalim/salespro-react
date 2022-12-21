import React from 'react';
import SecondaryNavbar from '../components/common/SecondaryNavbar';
import EnterpriseHome from '../components/Enterprise/EnterpriseHome';
import EnterpriseCard from '../components/Enterprise/EnterpriseCard';
import UserRatesImg from '../assets/UserRatesImg.svg';
import UserRatesImg2 from '../assets/UserRatesImg2.svg';
import UserRatesImg3 from '../assets/UserRatesImg3.svg';
import Trial from '../components/Features/Trial';
import Footer from '../components/common/Footer';

function Enterprise() {
  React.useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
  };
  React.useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <SecondaryNavbar />
      <EnterpriseHome />
      <EnterpriseCard
        customClass="EnterpriseCard_center"
        img={UserRatesImg}
        title="Discounted user rates"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu, convallis est sed.
                Proin nulla eu a vitae lectus leo suscipit."
        btn="Contact Sales"
        btnClass="EnterpriseCard_btn"
      />
      <EnterpriseCard
        customClass="EnterpriseCard_center_reverse"
        img={UserRatesImg2}
        title="Dedicated account manager"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu, convallis est sed. Proin nulla eu a vitae lectus leo suscipit."
        btn="Contact Sales"
        btnClass="EnterpriseCard_btn2"
      />
      <EnterpriseCard
        customClass="EnterpriseCard_center"
        img={UserRatesImg3}
        title="Discounted SMS / Call rates"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu, convallis est sed.
                Proin nulla eu a vitae lectus leo suscipit."
        btn="Contact Sales"
        btnClass="EnterpriseCard_btn3"
      />
      <Trial />
      <Footer />
    </div>
  );
}

export default Enterprise;
