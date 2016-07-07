import React from 'react';
import Helmet from 'react-helmet';

import collection from '../../../../dynatic/collection';

import Header from '../Header/Header';
import ItemList from '../Item/ItemList';
import '../App/App.css';

export default class Landing extends React.Component {
  filterPosts() {
    return collection.filter(item => item.category === 'post');
  }

  render() {
    return (
      <div>
        <Helmet
          title="Landing"
          meta={[
            { name: 'description', content: 'Landing' }
          ]}
        />
        <Header backgroundImage="https://images.unsplash.com/photo-1463123081488-789f998ac9c4?dpr=1&auto=format&crop=entropy&fit=crop&w=1366&h=911&q=80" />
        <main>
          <ItemList items={this.filterPosts()} />
        </main>
      </div>
    );
  }
}
