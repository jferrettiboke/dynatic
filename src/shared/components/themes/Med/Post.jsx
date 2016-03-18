import React from 'react';
import { rawMarkup, renderHighlightCode } from './util.js';
import Header from './Header.jsx';

export default class Post extends React.Component {
  componentDidMount() {
    renderHighlightCode();
  }

  render() {
    return (
      <div>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="p-y-3" dangerouslySetInnerHTML={rawMarkup(this.props.content)}></div>
                <div className="text-muted p-b-3">
                  <img className="img-circle m-r-1" style={{height: 25, width: 25}} src="/img/logo.png" alt="..." />
                  {this.props.author} · {this.props.date}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
