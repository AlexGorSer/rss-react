import React from 'react';
import Rss from '../../assets/rss.svg';
import Git from '../../assets/github.svg';
import './Footer.scss';

class Footer extends React.Component {
  render(): React.ReactNode {
    return (
      <footer className="footer__container">
        <div className="git__logo__container">
          <a
            className="footer__link"
            href="https://github.com/AlexGorSer"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="git-logo" />
            <p>AlexGorSer</p>
          </a>
        </div>
        <p>2023</p>
        <div className="rss__logo__container">
          <a
            className="footer__link"
            href="https://github.com/rolling-scopes-school/tasks/tree/master/react"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rss-logo" src={Rss} alt="rss-logo" />
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
