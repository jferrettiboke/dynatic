import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import Landing from '../components/Landing/Landing.jsx';
import Post from '../components/Blog/Post.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path=":post" component={Post} />
  </Route>
);
