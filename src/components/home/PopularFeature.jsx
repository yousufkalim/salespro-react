// Init
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from '../../assets/images/popular_feature.svg';
import SMS from '../../assets/images/sms_image.svg';
import PopularFeatureBody from './PopularFeatureBody';

const items = [
  {
    text: 'Auto Dealer',
    id: '0',
  },
  {
    text: 'Unlimited Messaging',
    id: '1',
  },
  {
    text: 'Integrated CRM',
    id: '2',
  },
  {
    text: 'Automation',
    id: '3',
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
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
  const [activeId, setactiveId] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="popularFeatureContainer">
      <p className="popularFeatureTopHeading">MOST POPULAR FEATURES</p>
      <div className="popularFeatureMainDiv">
        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              {items.map((val, index) => (
                <Tab
                  onClick={(event) => setactiveId(event.target.id)}
                  className={`${
                    // eslint-disable-next-line eqeqeq
                    `simple-tab-${val?.id}` == activeId || val?.id == activeId
                      ? 'popularFeatureTabsContainerActive'
                      : 'popularFeatureTabsContainer '
                  }`}
                  label={val?.text}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <PopularFeatureBody
              heading="Auto-Dialing System"
              desp="Salespro Direct comes equipped with a PowerDialer that automatically dials your
              list of leads ($150/mo retail value). The PowerDialer immediately starts calling
              the next person until you get a prospect on the phone. On average, Salespro Direct
              users are able to make 60-100 calls per hour"
              point1="Call up to 100 prospects a hour"
              point2="Call from mulitple numbers"
              point3="Record & Track all Calls Made"
              image={Image}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PopularFeatureBody
              heading="Unlimited SMS"
              desp="Tired of being limited on the volume of SMS campaigns you can send, using our proven strategies you can send truly unlimited sms campaigns."
              listHeading="Salespro Direct SMS capabilities allow you to"
              point1="Send unlimited SMS messages to prospects directly through Salespro Direct"
              point2="Create automated SMS messages"
              point3="Draft SMS templates to fire out quickly to prospects"
              point4="Write personalized SMS messages for specific prospects"
              point5="Prospect with unlimited outbound SMS campaigns"
              point6="Automate your follow up process"
              image={SMS}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <PopularFeatureBody
              heading="Integrated CRM"
              desp="Salespro Direct comes equipped with a PowerDialer that automatically dials your
              list of leads ($150/mo retail value). The PowerDialer immediately starts calling
              the next person until you get a prospect on the phone. On average, Salespro Direct
              users are able to make 60-100 calls per hour"
              point1="Call up to 100 prospects a hour"
              point2="Call from mulitple numbers"
              point3="Record & Track all Calls Made"
              image={Image}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PopularFeatureBody
              heading="Automation"
              desp="Salespro Direct comes equipped with a PowerDialer that automatically dials your
              list of leads ($150/mo retail value). The PowerDialer immediately starts calling
              the next person until you get a prospect on the phone. On average, Salespro Direct
              users are able to make 60-100 calls per hour"
              point1="Call up to 100 prospects a hour"
              point2="Call from mulitple numbers"
              point3="Record & Track all Calls Made"
              image={Image}
            />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
