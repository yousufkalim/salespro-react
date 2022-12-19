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
import Image from '../../assets/images/popular_feature.svg';
import SMS from '../../assets/images/sms_image.svg';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DoneIcon from '@mui/icons-material/Done';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function PopularFeature() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="popularFeatureContainer">
        <p className="popularFeatureTopHeading">MOST POPULAR FEATURES</p>
        <div className="popularFeatureMainDiv">
          <Box sx={{ width: '100%' }}>
            <Box>
              <Tabs
                className="popularFeatureTabsContainer"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Auto Dealer" {...a11yProps(0)} />
                <Tab label="Unlimited Messaging" {...a11yProps(1)} />
                <Tab label="Integrated CRM" {...a11yProps(2)} />
                <Tab label="Automation" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="popularFeatureSubDiv">
                <div className="popularFeatureTextDiv">
                  <p className="popularFeatureHeading">
                    Auto-Dialing <br /> System
                  </p>
                  <p className="popularFeatureDesp">
                    Salespro Direct comes equipped with a PowerDialer that automatically dials your
                    list of leads ($150/mo retail value). The PowerDialer immediately starts calling
                    the next person until you get a prospect on the phone. On average, Salespro
                    Direct users are able to make 60-100 calls per hour
                  </p>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Call up to 100 prospects a hour</p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Call from mulitple numbers</p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Record & Track all Calls Made</p>
                  </div>

                  <div className="popularFeatureButton">Start Your Free Trial</div>
                  <div className="popularFeatureFeatureBtn">See all features</div>
                </div>
                <div className="popularFeatureImgDiv">
                  <img src={Image} alt="image" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="popularFeatureSubDiv">
                <div className="popularFeatureTextDiv">
                  <p className="popularFeatureHeading">Unlimited SMS</p>
                  <p className="popularFeatureDesp">
                    Tired of being limited on the volume of SMS campaigns you can send, using our
                    proven strategies you can send truly unlimited sms campaigns.
                  </p>
                  <p className="popularFeatureSubDesp">
                    Salespro Direct SMS capabilities allow you to
                  </p>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">
                      Send unlimited SMS messages to prospects directly through Salespro Direct
                    </p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Create automated SMS messages</p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">
                      Draft SMS templates to fire out quickly to prospects
                    </p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">
                      Write personalized SMS messages for specific prospects
                    </p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">
                      Prospect with unlimited outbound SMS campaigns
                    </p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Automate your follow up process</p>
                  </div>

                  <div className="popularFeatureButton">Start Your Free Trial</div>

                  <div className="popularFeatureFeatureBtn">See all features</div>
                </div>
                <div className="popularFeatureImgDiv">
                  <img src={SMS} alt="image" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="popularFeatureSubDiv">
                <div className="popularFeatureTextDiv">
                  <p className="popularFeatureHeading">Integrated CRM</p>
                  <p className="popularFeatureDesp">
                    Salespro Direct comes equipped with a PowerDialer that automatically dials your
                    list of leads ($150/mo retail value). The PowerDialer immediately starts calling
                    the next person until you get a prospect on the phone. On average, Salespro
                    Direct users are able to make 60-100 calls per hour
                  </p>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Call up to 100 prospects a hour</p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Call from mulitple numbers</p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Record & Track all Calls Made</p>
                  </div>

                  <div className="popularFeatureButton">Start Your Free Trial</div>
                  <div className="popularFeatureFeatureBtn">See all features</div>
                </div>
                <div className="popularFeatureImgDiv">
                  <img src={Image} alt="image" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="popularFeatureSubDiv">
                <div className="popularFeatureTextDiv">
                  <p className="popularFeatureHeading">Automation</p>
                  <p className="popularFeatureDesp">
                    Salespro Direct comes equipped with a PowerDialer that automatically dials your
                    list of leads ($150/mo retail value). The PowerDialer immediately starts calling
                    the next person until you get a prospect on the phone. On average, Salespro
                    Direct users are able to make 60-100 calls per hour
                  </p>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Call up to 100 prospects a hour</p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Call from mulitple numbers</p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <DoneIcon sx={{ color: '#ff403e' }} />
                    </div>
                    <p className="popularFeatureList">Record & Track all Calls Made</p>
                  </div>

                  <div className="popularFeatureButton">Start Your Free Trial</div>
                  <div className="popularFeatureFeatureBtn">See all features</div>
                </div>
                <div className="popularFeatureImgDiv">
                  <img src={Image} alt="image" />
                </div>
              </div>
            </TabPanel>
          </Box>
        </div>
      </div>
    </>
  );
}
