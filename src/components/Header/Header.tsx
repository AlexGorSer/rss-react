import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import HOCLocation from './Location';

export const Header: React.FC = () => {
  function handleActiveLink(active: boolean) {
    return active ? 'active' : 'no_active';
  }

  return (
    <header className="header_container">
      <HOCLocation />
      <nav className="header_nav">
        <NavLink to={'/'} className={({ isActive }) => handleActiveLink(isActive)}>
          Main
        </NavLink>
        <NavLink to={'/about'} className={({ isActive }) => handleActiveLink(isActive)}>
          About
        </NavLink>
        <NavLink to={'/form'} className={({ isActive }) => handleActiveLink(isActive)}>
          Form
        </NavLink>
        <NavLink to={'/contacts'} className={({ isActive }) => handleActiveLink(isActive)}>
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
