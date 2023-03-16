import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  activeLink(active: boolean) {
    return active ? 'active' : '';
  }

  render(): React.ReactNode {
    return (
      <>
        <div className="header_container">
          <nav>
            <NavLink to={'/'} className={({ isActive }) => this.activeLink(isActive)}>
              Main
            </NavLink>
            <NavLink to={'/about'} className={({ isActive }) => this.activeLink(isActive)}>
              About
            </NavLink>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
