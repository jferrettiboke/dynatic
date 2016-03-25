import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';
import collection from '../../../data/__collection.json';
import boot from './boot.js';

export default class ContainerComponent extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
  }

  getData() {
    return _.find(collection, {'slug': this.props.location.pathname});
  }

  getComponent() {
    let component;
    this.data = this.getData();
    if (this.data == undefined) {
      component = <div></div>;
      this.context.router.replace('/');
    } else {
      component = React.createElement(boot[this.data.layout], this.data);
    }
    return component;
  }

  render() {
    const data = this.getData();
    return (
      <div>
        <Helmet title={data.title} />
        {this.getComponent()}
      </div>
    );
  }
}

ContainerComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};
