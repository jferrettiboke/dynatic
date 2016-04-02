import React from 'react';
import Helmet from 'react-helmet';
import styles from './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Dynatic"
          meta={[
            {"charset": "utf-8"},
            {"name": "viewport", "content": "width=device-width, initial-scale=1, shrink-to-fit=no"},
            {"http-equiv": "x-ua-compatible", "content": "ie=edge"}
          ]}
          link={[
            {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css", "integrity": "sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd", "crossorigin": "anonymous"},
            {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,400italic,500,500italic,700,700italic,400,900,900italic"},
            {"rel": "stylesheet", "href": "/css/styles.css"}
          ]}
        />
        {this.props.children}
      </div>
    );
  }
}
