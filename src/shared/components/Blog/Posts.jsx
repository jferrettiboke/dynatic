import React from 'react';
import { Link } from 'react-router';
import marked from 'marked';
import posts from '../../../../data/collection.json';

export default class Posts extends React.Component {
  rawMarkup(text) {
    var rawMarkup = marked(text, {sanitize: true});
    rawMarkup = rawMarkup.replace(/(<([^>]+)>)/igm, "");
    rawMarkup = rawMarkup.substring(0, 280);
    rawMarkup += '...';
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div>
        {
          posts.map((post, index) => {
            return (
              <article className="m-b-3" key={index}>
                <h2>
                  <Link to={`/${post.slug}`}>{post.title}</Link>
                </h2>
                <p dangerouslySetInnerHTML={this.rawMarkup(post.content)}></p>
                <div className="text-muted">
                  <img className="img-circle m-r-1" style={{height: 25, width: 25}} src="/img/logo.png" alt="..." />
                  {post.author} · {post.date}
                </div>
              </article>
            );
          })
        }
      </div>
    );
  }
}
