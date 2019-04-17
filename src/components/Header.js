import React from 'react';
import {toast} from 'react-toastify';

import {
  Button,
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import './css/Header.css';

import image from './assets/logo.png';

const FontAwesome = require('react-fontawesome');

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      menuOpen: false
    };
  }
  
  toggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render(){
    return(
        <Navbar color='faded'>
          <div className="logo-container">
            <NavbarBrand href="/"><img alt="logo" src={image}/></NavbarBrand>
          </div>
          <Nav>
            <NavItem>
              <NavLink href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/gallery">
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/contact">
                Contact
              </NavLink>
            </NavItem>
        </Nav>
        </Navbar>
    )
  }
}