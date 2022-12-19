/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
import Negative from '../../assets/images/negative.svg';
import Collapse from '@mui/material/Collapse';
import { List } from '@mui/material';
import { QuestionData } from '../../utils/QuestionsData';

export default function AskedQuestions() {
  const [open, setOpen] = React.useState(false);
  const handleClick = (item) => {
    setOpen(item);
  };
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
          {QuestionData.map((item) => {
            return (
              <div style={{ width: '100%', marginBottom: '2%' }}>
                <div className="askedQuestionsListContainer">
                  <div className="askedQuestionsListDiv">
                    <div
                      className={
                        open === item.title
                          ? 'askedQuestionsListNumberClose'
                          : 'askedQuestionsListNumber'
                      }
                    >
                      {item.index}
                    </div>
                    <div className="askedQuestionsListText">{item.title}</div>
                  </div>
                  <div
                    onClick={() => {
                      if (open !== item.title) {
                        handleClick(item.title);
                      } else {
                        handleClick('');
                      }
                    }}
                    className="askedQuestionsListAdd"
                  >
                    <img src={open === item.title ? Negative : Plus} alt="plus" />
                  </div>
                </div>
                <Collapse
                  className="askedQuestionsCollapseDiv"
                  in={open === item.title}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <div className="askedQuestionsCollapseText">{item.desp}</div>
                  </List>
                </Collapse>
              </div>
            );
          })}

          <div className="testimonialFreeTrialBtn">Contact support</div>
        </div>
      </div>
    </>
  );
}
