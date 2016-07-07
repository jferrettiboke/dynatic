import React from 'react';
import Helmet from 'react-helmet';

import boot from '../boot';
import MarkdownConverter from '../../utils/MarkdownConverter/MarkdownConverter';

import Header from '../Header/Header';
import ItemDetailFooter from './ItemDetailFooter';
import '../App/App.css';

const ItemDetail = props => (
  <div>
    <Helmet
      title={props.title}
      meta={[
        { name: 'description', content: props.description || '' }
      ]}
    />
    <Header
      backgroundImage={props.backgroundImage}
      color="white"
      height="full"
      title={props.title}
    />
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <article>
              <MarkdownConverter markdown={props.content} components={boot} />
              <ItemDetailFooter {...props} />
            </article>
          </div>
        </div>
      </div>
    </main>
  </div>
);

ItemDetail.propTypes = {
  backgroundImage: React.PropTypes.string,
  content: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};

export default ItemDetail;
