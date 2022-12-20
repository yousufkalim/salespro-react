// Init
import { Grid } from '@mui/material';
import React from 'react';
import AttachFile from '@mui/icons-material/AttachFileOutlined';

export default function ContactForm() {
  return (
    <div className="contactUsFormContainer">
      <div className="contactUsFormTitle">Contact us</div>
      <form className="contactUsFormDiv">
        <div className="contactUsInputContainer">
          <Grid className="contactUsGridContainer" container spacing={0}>
            <Grid className="contactUsGridDiv" xs={12} md={5.9}>
              <div className="contactUsInputDiv">
                <p>Full Name</p>
                <input placeholder="Enter your Text" />
              </div>
            </Grid>
            <Grid xs={12} md={5.9}>
              <div className="contactUsInputDiv">
                <p>Phone</p>
                <input placeholder="Enter your Text" />
              </div>
            </Grid>
            <Grid xs={12} md={5.9}>
              <div className="contactUsInputDiv">
                <p>Email</p>
                <input placeholder="Enter your Text" />
              </div>
            </Grid>
            <Grid xs={12} md={5.9}>
              <div className="contactUsInputDiv">
                <p>What role are you applying for?</p>
                <input placeholder="Enter your Text" />
              </div>
            </Grid>

            <Grid xs={12}>
              <div className="contactUsTextAreaDiv">
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '2%',
                    height: '100%',
                  }}
                >
                  <input
                    style={{ position: 'absolute', opacity: '0', width: '100%' }}
                    type="file"
                  />
                  <AttachFile style={{ color: '#2A7FF8' }} />
                </div>

                <p>Add Any Attachment</p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="contactUsBtnContainer">
          <p>
            By submitting my information, I confirm that I have read and understood the{' '}
            <span style={{ color: '#FF403E', textDecoration: 'underline' }}>
              Terms of services{' '}
            </span>
            &{' '}
            <span style={{ color: '#0051C4', textDecoration: 'underline' }}>Privacy Policy. </span>
          </p>
          <div className="contactUsBtnDiv">
            <button className="contactUsBtn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
