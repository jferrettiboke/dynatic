import React from 'react';
import { Link } from 'react-router';
import classNames from 'classNames';
import styles from './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className={styles['decorator-loading']} style={{height: 5}}></div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <nav className="nav pull-xs-left">
                  <Link className={styles.logo} to="/"></Link>
                </nav>
                <nav className="nav pull-xs-right">
                  <Link className={styles['nav-link'], 'text-muted'} to="/">Home</Link>
                  <Link className={styles['nav-link'], 'text-muted'} to="/docs">Docs</Link>
                  <a href="https://github.com/jferrettiboke/dynatic" target="_blank" className="btn btn-primary-outline">GitHub</a>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
