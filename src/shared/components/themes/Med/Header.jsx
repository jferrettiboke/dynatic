import React from 'react';
import { Link } from 'react-router';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="decorator-loading" style={{height: 5}}></div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <nav className="nav pull-xs-left">
                  <Link className="logo" to="/"></Link>
                </nav>
                <nav className="nav pull-xs-right">
                  <Link className="nav-link color-grey" to="/">Home</Link>
                  <Link className="nav-link color-grey" to="/docs">Docs</Link>
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
