import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ContainerComponent from '../../ContainerComponent.jsx';
import App from './App.jsx';
import Landing from './Landing.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path=":any" component={ContainerComponent} />
  </Route>
);
