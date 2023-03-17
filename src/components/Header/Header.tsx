import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  state = {
    path: '/',
  };

  handleActiveLink(active: boolean) {
    return active ? 'active' : 'no_active';
  }

  handleSetPath(path: string) {
    this.setState({ path: path });
  }

  handleLoadPath() {
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
    this.handleLoadPath();
  }

  render(): React.ReactNode {
    return (
      <header className="header_container">
        <div className="path_name">{this.state.path}</div>
        <nav className="header_nav">
          <NavLink
            to={'/'}
            className={({ isActive }) => this.handleActiveLink(isActive)}
            onClick={() => this.handleSetPath('Main')}
          >
            Main
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) => this.handleActiveLink(isActive)}
            onClick={() => this.handleSetPath('About')}
          >
            About
          </NavLink>
          <NavLink
            to={'/contacts'}
            className={({ isActive }) => this.handleActiveLink(isActive)}
            onClick={() => this.handleSetPath('Contacts')}
          >
            Contacts
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
