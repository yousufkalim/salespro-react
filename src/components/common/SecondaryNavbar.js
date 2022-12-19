/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/order */
/* eslint-disable react/jsx-filename-extension */
// Init
import React from 'react';
import Logo from '../../assets/whiteLogo.svg';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItemButton } from '@mui/material';

// Component
export default function SecondaryNavbar() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="secondaryNavbar">
      <div className="navbarLeftDiv">
        <div className="navbarLogoDiv">
          <img className="navbarLogo" src={Logo} alt="logo" />
        </div>
        <div className="navbarMenuDiv" id="secNavbarMenuDiv">
          <p>Home</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Enterprise</p>
        </div>
      </div>
      <div className="navbarRightDiv">
        <p className="secNavbarContactBtn">Contact Sales</p>
        <div className="navbarSignUpBtn">
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.915 5.30849C11.7732 7.21845 10.325 8.77695 8.73563 8.77695C7.14553 8.77695 5.69494 7.21923 5.5562 5.30849C5.4113 3.32145 6.82026 1.84003 8.73563 1.84003C10.6502 1.84003 12.0592 3.35767 11.915 5.30849Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.73684 11.0892C5.59364 11.0892 2.40343 12.8235 1.81302 16.0969C1.74211 16.4916 1.96486 16.87 2.37799 16.87H15.0957C15.5088 16.87 15.7323 16.4916 15.6614 16.0969C15.0702 12.8235 11.88 11.0892 8.73684 11.0892Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Signup</p>
        </div>
        <div
          className="navbarLoginBtn"
          style={{ marginRight: '5%', background: '#FE7666', padding: '3%' }}
        >
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.915 5.30849C11.7732 7.21845 10.325 8.77695 8.73563 8.77695C7.14553 8.77695 5.69494 7.21923 5.5562 5.30849C5.4113 3.32145 6.82026 1.84003 8.73563 1.84003C10.6502 1.84003 12.0592 3.35767 11.915 5.30849Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.73684 11.0892C5.59364 11.0892 2.40343 12.8235 1.81302 16.0969C1.74211 16.4916 1.96486 16.87 2.37799 16.87H15.0957C15.5088 16.87 15.7323 16.4916 15.6614 16.0969C15.0702 12.8235 11.88 11.0892 8.73684 11.0892Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p style={{ color: 'white' }}>Login</p>
        </div>
      </div>
      <div className="navbarMobMenu">
        <div className="navbarMobMenuIcon" onClick={handleClick}>
          <MenuIcon />
        </div>
        <Collapse className="navbarCollapseDiv" in={open} timeout="auto" unmountOnExit>
          <List className="navbarCollapseListDiv" component="div" disablePadding>
            <ListItemButton className="navbarCollapseListItems">
              <div>Home</div>
            </ListItemButton>
            <ListItemButton>
              <div>Features</div>
            </ListItemButton>
            <ListItemButton>
              <div>Pricing</div>
            </ListItemButton>
            <ListItemButton>
              <div>Enterprise</div>
            </ListItemButton>
            <ListItemButton>
              <div>Contact Us</div>
            </ListItemButton>
            <ListItemButton>
              <div>Signup</div>
            </ListItemButton>
            <ListItemButton>
              <div>Login</div>
            </ListItemButton>
          </List>
        </Collapse>
      </div>
    </div>
  );
}
