import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  state = {
    path: '/rss-react',
  };

  handleActiveLink(active: boolean) {
    return active ? 'active' : 'no_active';
  }

  handleSetPath(path: string) {
    this.setState({ path: path });
  }

  handleLoadPath() {
    const path = window.location.pathname;
    console.log(path);
    switch (path) {
      case '/rss-react':
        this.setState({ path: 'Main' });
        break;
      case '/rss-react/about':
        this.setState({ path: 'About' });
        break;
      case '/rss-react/contacts':
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
        <p className="path_name">{this.state.path}</p>
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
