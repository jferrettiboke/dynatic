import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import ContainerComponent from '../components/ContainerComponent.jsx';
import Landing from '../components/Landing/Landing.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path=":any" component={ContainerComponent} />
  </Route>
);
