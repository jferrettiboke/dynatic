import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header.jsx';
import Blog from './Blog.jsx';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Dynatic"
          meta={[
            {"name": "description", "content": "An easy content generator for websites and blogs with Markdown, built with React, PostCSS and much more."}
          ]}
        />
        <Header />
        <section className="p-y-3 m-b-2 text-xs-center">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="text-multicolor">Dynatic</h1>
                <p className="lead p-t-1">An easy content generator for websites and blogs with Markdown, built with React, PostCSS and much more.</p>
                <p className="p-t-1">
                  <iframe src="https://ghbtns.com/github-btn.html?user=jferrettiboke&repo=dynatic&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
                  <iframe src="https://ghbtns.com/github-btn.html?user=jferrettiboke&repo=dynatic&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px"></iframe>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Blog />
      </div>
    );
  }
}
