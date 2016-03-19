import React from 'react';
import Header from './Header.jsx';
import Blog from './Blog.jsx';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="full-height">
        <section className="fullscreen centered-wrap">
          <Header />
          <div className="centered text-xs-center">
            <h1 className="text-multicolor">Dynatic</h1>
            <p className="lead p-t-1">The most powerful and easiest static content generator for websites and blogs with Markdown, React, PostCSS and much more.</p>
            <p className="p-t-1">
              <iframe src="https://ghbtns.com/github-btn.html?user=jferrettiboke&repo=dynatic&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
              <iframe src="https://ghbtns.com/github-btn.html?user=jferrettiboke&repo=dynatic&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px"></iframe>
            </p>
          </div>
        </section>
        <Blog />
      </div>
    );
  }
}
