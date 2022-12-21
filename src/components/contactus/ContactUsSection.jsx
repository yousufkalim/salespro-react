// Init
import React from 'react';
import Knowledge from '@mui/icons-material/ReceiptLongOutlined';
import Chat from '@mui/icons-material/MarkUnreadChatAltOutlined';
import Training from '@mui/icons-material/ModelTrainingOutlined';
import Help from '@mui/icons-material/HelpOutlineOutlined';
import Account from '@mui/icons-material/PersonOutlineOutlined';
import ResourcesBox from './ResourcesBox';
import ContactForm from './ContactForm';

export default function ContactUsSection() {
  return (
    <div className="contactUsSectionContainer">
      <div className="contactUsSectionLeftDiv">
        <p className="contactUsLeftTitle">Additional Resources</p>
        <ResourcesBox
          Icon={<Knowledge style={{ color: '#236FDA' }} />}
          heading="Knowledge Base"
          desp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu, convallis est sed. Proinnulla eu a vitae"
        />
        <ResourcesBox
          Icon={<Chat style={{ color: '#236FDA' }} />}
          heading="Quick Chat"
          desp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu, convallis est sed. "
        />
        <ResourcesBox
          Icon={<Training style={{ color: '#236FDA' }} />}
          heading="Training Centre"
          desp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu, convallis est sed. "
        />
        <ResourcesBox
          Icon={<Help style={{ color: '#236FDA' }} />}
          heading="Account Help"
          desp="Lorem ipsum dolor sit amet, consectetur "
        />
        <ResourcesBox
          Icon={<Account style={{ color: '#236FDA' }} />}
          heading="Account Cancelation"
          desp="Lorem ipsum dolor sit amet, consectetur"
        />
      </div>
      <div className="contactUsSectionRightDiv">
        <ContactForm />
      </div>
    </div>
  );
}
