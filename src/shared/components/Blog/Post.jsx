import React from 'react';
import _ from 'lodash';
import marked from 'marked';
import Header from '../Header/Header.jsx';
import posts from '../../../../collections/posts.json';

export default class Post extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
    this.state = {post: {content: ''}};
  }

  componentDidMount() {
    const post = _.find(posts, {'slug': this.props.params.post});
    if (post == undefined) {
      this.context.router.replace('/');
    }
    this.setState({
      post: post
    });
  }

  componentDidUpdate() {
    Prism.highlightAll();
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
    return (
      <div>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="p-y-3" dangerouslySetInnerHTML={this.rawMarkup(this.state.post.content)}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Post.contextTypes = {
  router: React.PropTypes.object.isRequired
};
