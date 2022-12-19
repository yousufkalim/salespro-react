/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/newline-after-import */
// Init
import React from 'react';
import QA from '../../assets/images/qa_image.svg';
import Plus from '../../assets/images/plus.png';
export default function AskedQuestions() {
  return (
    <>
      <div className="askedQuestionsContainer">
        <div className="askedQuestionsLeftDiv">
          <div className="askedQuestionsTitleDiv">
            <p>Q & A</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="askedQuestionsImageDiv">
            <img src={QA} alt="image" />
          </div>
        </div>
        <div className="askedQuestionsRightDiv">
          <div className="askedQuestionsListContainer">
            <div className="askedQuestionsListDiv">
              <div className="askedQuestionsListNumber">1</div>
              <div className="askedQuestionsListText">
                Does SalesPro Direct require a long-term commitment?
              </div>
            </div>
            <div className="askedQuestionsListAdd">
              <img src={Plus} alt="plus" />
            </div>
          </div>
          <div className="askedQuestionsListContainer">
            <div className="askedQuestionsListDiv">
              <div className="askedQuestionsListNumber">2</div>
              <div className="askedQuestionsListText">Does SalesPro Direct have a guarantee?</div>
            </div>
            <div className="askedQuestionsListAdd">
              <img src={Plus} alt="plus" />
            </div>
          </div>
          <div className="askedQuestionsListContainer">
            <div className="askedQuestionsListDiv">
              <div className="askedQuestionsListNumber">3</div>
              <div className="askedQuestionsListText">
                Can I build websites and landing pages in Salespro Direct?
              </div>
            </div>
            <div className="askedQuestionsListAdd">
              <img src={Plus} alt="plus" />
            </div>
          </div>
          <div className="askedQuestionsListContainer">
            <div className="askedQuestionsListDiv">
              <div className="askedQuestionsListNumber">4</div>
              <div className="askedQuestionsListText">How do I know which plan is best for me?</div>
            </div>
            <div className="askedQuestionsListAdd">
              <img src={Plus} alt="plus" />
            </div>
          </div>
          <div className="askedQuestionsListContainer">
            <div className="askedQuestionsListDiv">
              <div className="askedQuestionsListNumber">5</div>
              <div className="askedQuestionsListText">
                How long will it take to install Salespro Direct?
              </div>
            </div>
            <div className="askedQuestionsListAdd">
              <img src={Plus} alt="plus" />
            </div>
          </div>
          <div className="askedQuestionsListContainer">
            <div className="askedQuestionsListDiv">
              <div className="askedQuestionsListNumber">6</div>
              <div className="askedQuestionsListText">
                Is SalesPro Direct suitable for any kind of business?
              </div>
            </div>
            <div className="askedQuestionsListAdd">
              <img src={Plus} alt="plus" />
            </div>
          </div>
          <div className="askedQuestionsListContainer">
            <div className="askedQuestionsListDiv">
              <div className="askedQuestionsListNumber">7</div>
              <div className="askedQuestionsListText">
                Does SalesPro Direct have any additional fees or costs?
              </div>
            </div>
            <div className="askedQuestionsListAdd">
              <img src={Plus} alt="plus" />
            </div>
          </div>
          <div className="testimonialFreeTrialBtn">Contact support</div>
        </div>
      </div>
    </>
  );
}
