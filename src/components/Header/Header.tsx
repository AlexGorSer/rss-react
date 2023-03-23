import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import HOCLocation from './Location';

class Header extends React.Component {
  handleActiveLink(active: boolean) {
    return active ? 'active' : 'no_active';
  }

  render(): React.ReactNode {
    return (
      <header className="header_container">
        <HOCLocation />
        <nav className="header_nav">
          <NavLink to={'/'} className={({ isActive }) => this.handleActiveLink(isActive)}>
            Main
          </NavLink>
          <NavLink to={'/about'} className={({ isActive }) => this.handleActiveLink(isActive)}>
            About
          </NavLink>
          <NavLink to={'/contacts'} className={({ isActive }) => this.handleActiveLink(isActive)}>
            Contacts
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
