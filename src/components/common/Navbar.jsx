/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// Init
import React from 'react';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItemButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '../../utils/ScrollPosition';
import Logo from '../../assets/images/logo.svg';

// import PersonIcon from '../../assets/images/person_icon.svg';
// Component
export default function Navbar({ btn }) {
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
          <NavLink to="/">
            <img className="navbarLogo" src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navbarMenuDiv">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'navbarMenuLinkActive' : 'navbarMenuLink')}
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            className={({ isActive }) => (isActive ? 'navbarMenuLinkActive' : 'navbarMenuLink')}
          >
            Features
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? 'navbarMenuLinkActive' : 'navbarMenuLink')}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/enterprise"
            className={({ isActive }) => (isActive ? 'navbarMenuLinkActive' : 'navbarMenuLink')}
          >
            Enterprise
          </NavLink>
        </div>
      </div>
 {btn && (
      <div className="navbarRightDiv">
        <NavLink to="/contactsales" className="navbarContactBtn">
          Contact sales
        </NavLink>
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
          <NavLink className="navbarLink" to="/signup">
            Signup
          </NavLink>
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
          <NavLink className="navbarLinkLogin" to="/login">
            Login
          </NavLink>
        </div>
        </div>
      )}
      <div className="navbarMobMenu">
        <div className="navbarMobMenuIcon" onClick={handleClick}>
          <MenuIcon />
        </div>
      </div>
      <Collapse className="navbarCollapseDiv" in={open} timeout="auto" unmountOnExit>
        <List className="navbarCollapseListDiv" component="div" disablePadding>
          <ListItemButton className="navbarCollapseListItems">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbarCollapseLinkActive' : 'navbarCollapseLink'
              }
              to="/"
            >
              Home
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbarCollapseLinkActive' : 'navbarCollapseLink'
              }
              to="/features"
            >
              Features
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbarCollapseLinkActive' : 'navbarCollapseLink'
              }
              to="/pricing"
            >
              Pricing
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbarCollapseLinkActive' : 'navbarCollapseLink'
              }
              to="/enterprise"
            >
              Enterprise
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbarCollapseLinkActive' : 'navbarCollapseLink'
              }
              to="/contactus"
            >
              Contact Us
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbarCollapseLinkActive' : 'navbarCollapseLink'
              }
              to="/signup"
            >
              Signup
            </NavLink>
          </ListItemButton>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbarCollapseLinkActive' : 'navbarCollapseLink'
              }
              to="/login"
            >
              Login
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  );
}
