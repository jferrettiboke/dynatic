import React from 'react';
import { Link } from 'react-router';
import marked from 'marked';
import collection from '../../../../../data/__collection.json';
import image from './assets/images/logo.png';

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
          collection.filter(data => data.layout == 'Post').map((data, index) => {
            return (
              <article className="m-b-3" key={index}>
                <h2>
                  <Link to={`${data.slug}`}>{data.title}</Link>
                </h2>
                <p dangerouslySetInnerHTML={this.rawMarkup(data.content)}></p>
                <div className="text-muted">
                  <img className="img-circle m-r-1" style={{height: 25, width: 25}} src={image} alt="..." />
                  {data.author} · {data.date}
                </div>
              </article>
            );
          })
        }
      </div>
    );
  }
}
