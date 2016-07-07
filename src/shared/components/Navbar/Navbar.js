import React from 'react';
import { Link } from 'react-router';

import styles from './Navbar.css';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { hidden: true };
    this.handleToggleFullScreenMenu = this.handleToggleFullScreenMenu.bind(this);
    this.handleHideFullScreenMenu = this.handleHideFullScreenMenu.bind(this);
  }

  toggleFullScreenMenu() {
    const logo = this.refs.logo;
    const button = this.refs.button;
    const section = this.refs.fullScreen;

    if (this.state.hidden) {
      this.setState({ hidden: false });
      logo.className += ` ${styles.fullScreenActive}`;
      button.className += ` ${styles.fullScreenActive}`;
      section.style.display = 'block';
    } else {
      this.setState({ hidden: true });
      logo.className = ` ${styles.logo}
      `;
      button.className = '';
      section.style.display = 'none';
    }
  }

  handleToggleFullScreenMenu(e) {
    e.preventDefault();
    this.toggleFullScreenMenu();
  }

  handleHideFullScreenMenu() {
    this.toggleFullScreenMenu();
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={`container-fluid ${styles.top}`}>
          <div className="row">
            <div className="col-sm-8">
              <div className={styles.logo} ref="logo">
                <Link to="/">
                  Dynatic
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={styles.button}>
                <a href="#" onClick={this.handleToggleFullScreenMenu} ref="button">
                  <i className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fullScreen} ref="fullScreen">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className={styles.menu}>
                  <ul>
                    <li>
                      <Link to="/" onClick={this.handleHideFullScreenMenu}>Home</Link>
                    </li>
                    <li>
                      <Link to="/docs" onClick={this.handleHideFullScreenMenu}>Docs</Link>
                    </li>
                    <li>
                      <a href="https://github.com/jferrettiboke/dynatic">GitHub</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
