import React from 'react';

function EnterpriseCard(props) {
  const { customClass, img, title, heading, btn, btnClass } = props;
  return (
    <div>
      <div className="EnterpriseCard">
        <div className={customClass}>
          <div className="EnterpriseCard_column">
            <img src={img} alt="" className="EnterpriseCard_img" />
          </div>
          <div className="EnterpriseCard_column2">
            <div className="EnterpriseCard_content">
              <p className="EnterpriseCard_title">{title}</p>
              <p className="EnterpriseCard_p">{heading}</p>
              <button type="button" className={btnClass}>
                {btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseCard;
