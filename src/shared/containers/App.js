import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

export default () => (
  <Router routes={routes} history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} />
);
