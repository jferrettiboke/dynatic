import React from 'react';
import Header from '../Header/Header.jsx';
import Posts from './Posts.jsx';

export default class Blog extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <Posts />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
