import React from 'react';
import _ from 'lodash';
import marked from 'marked';
import posts from '../../../data/collection.json';

import Post from './Blog/Post.jsx';
import Page from './Page/Page.jsx';

export default class ContainerComponent extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
    this.resource = _.find(posts, {'slug': this.props.params.any});

    /*
    if (this.resource == undefined) {
      this.context.router.replace('/');
    }
    */

    this.components = [];
    this.components['Post'] = <Post content={this.rawMarkup(this.resource.content)} date={this.resource.date} author={this.resource.author} />;
    this.components['Page'] = <Page content={this.rawMarkup(this.resource.content)} />;
  }

  rawMarkup(text) {
    var renderer = new marked.Renderer();
    renderer.table = function (header, body) {
      return `
        <table class="table">
          ${header}
          ${body}
        </table>
      `;
    };
    var rawMarkup = marked(text, {sanitize: true, renderer: renderer});
    return { __html: rawMarkup };
  }

  render() {
    return this.components[this.resource.layout]
  }
}

Post.contextTypes = {
  router: React.PropTypes.object.isRequired
};
