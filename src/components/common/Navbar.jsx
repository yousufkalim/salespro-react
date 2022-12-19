/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// Init
import React from 'react';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../../utils/ScrollPosition';
import Logo from '../../assets/images/logo.svg';

// import PersonIcon from '../../assets/images/person_icon.svg';
// Component
export default function Navbar() {
  const position = useScrollPosition();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className="navbarContainer"
      style={{
        background: position <= 10 ? 'transparent' : 'white',
      }}
    >
      <div className="navbarLeftDiv">
        <div className="navbarLogoDiv">
          <Link to="/">
            <img className="navbarLogo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navbarMenuDiv">
          <Link className="navbarMenuLink" to="/">
            Home
          </Link>
          <Link className="navbarMenuLink" to="/features">
            Features
          </Link>
          <Link to="/pricing" className="navbarMenuLink">
            Pricing
          </Link>
          <p className="navbarMenuLink">Enterprise</p>
        </div>
      </div>
      <div className="navbarRightDiv">
        <p className="navbarContactBtn" style={{ marginRight: '5%' }}>
          Contact us
        </p>
        <div className="navbarSignUpBtn">
          {/* <img src={PersonIcon} alt="icon" /> */}
          {/* <PersonOutlineOutlinedIcon /> */}
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.73684 11.0892C5.59364 11.0892 2.40343 12.8235 1.81302 16.0969C1.74211 16.4916 1.96486 16.87 2.37799 16.87H15.0957C15.5088 16.87 15.7323 16.4916 15.6614 16.0969C15.0702 12.8235 11.88 11.0892 8.73684 11.0892Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link className="navbarLink" to="/signup">
            Signup
          </Link>
        </div>
        <div className="navbarLoginBtn">
          {/* <img src={PersonIcon} alt="icon" /> */}
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.915 5.30849C11.7732 7.21845 10.325 8.77695 8.73563 8.77695C7.14553 8.77695 5.69494 7.21923 5.5562 5.30849C5.4113 3.32145 6.82026 1.84003 8.73563 1.84003C10.6502 1.84003 12.0592 3.35767 11.915 5.30849Z"
              stroke="#FF403E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.73684 11.0892C5.59364 11.0892 2.40343 12.8235 1.81302 16.0969C1.74211 16.4916 1.96486 16.87 2.37799 16.87H15.0957C15.5088 16.87 15.7323 16.4916 15.6614 16.0969C15.0702 12.8235 11.88 11.0892 8.73684 11.0892Z"
              stroke="#FF403E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Login</p>
        </div>
      </div>
      <div className="navbarMobMenu">
        <div className="navbarMobMenuIcon" onClick={handleClick}>
          <MenuIcon />
        </div>
      </div>
      <Collapse className="navbarCollapseDiv" in={open} timeout="auto" unmountOnExit>
        <List className="navbarCollapseListDiv" component="div" disablePadding>
          <ListItemButton className="navbarCollapseListItems">
            <Link className="navbarCollapseLink" to="/">
              Home
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link className="navbarCollapseLink" to="/features">
              Features
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link className="navbarCollapseLink" to="/pricing">
              Pricing
            </Link>
          </ListItemButton>
          <ListItemButton>
            <div>Enterprise</div>
          </ListItemButton>
          <ListItemButton>
            <div>Contact Us</div>
          </ListItemButton>
          <ListItemButton>
            <Link className="navbarCollapseLink" to="/signup">
              Signup
            </Link>
          </ListItemButton>
          <ListItemButton>
            <div>Login</div>
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  );
}
