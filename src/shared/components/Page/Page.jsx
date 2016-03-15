import React from 'react';
import Header from '../Header/Header.jsx';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="p-y-3" dangerouslySetInnerHTML={this.props.content}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
