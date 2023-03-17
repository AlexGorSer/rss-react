import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  state = {
    path: '',
  };

  activeLink(active: boolean) {
    return active ? 'active' : 'no_active';
  }

  setPath(path: string) {
    this.setState({ path: path });
  }

  loadPath() {
    const path = window.location.pathname;
    switch (path) {
      case '/':
        this.setState({ path: 'Main' });
        break;
      case '/about':
        this.setState({ path: 'About' });
        break;
      case '/contacts':
        this.setState({ path: 'Contacts' });
        break;
      default:
        this.setState({ path: 'Not found' });
    }
  }
  componentDidMount() {
    this.loadPath();
  }

  render(): React.ReactNode {
    return (
      <div className="header_container">
        <div className="path_name">{this.state.path}</div>
        <nav className="header_nav">
          <NavLink
            to={'/'}
            className={({ isActive }) => this.activeLink(isActive)}
            onClick={() => this.setPath('Main')}
          >
            Main
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) => this.activeLink(isActive)}
            onClick={() => this.setPath('About')}
          >
            About
          </NavLink>
          <NavLink
            to={'/contacts'}
            className={({ isActive }) => this.activeLink(isActive)}
            onClick={() => this.setPath('Contacts')}
          >
            Contacts
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
