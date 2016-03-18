import React from 'react';
import _ from 'lodash';
import collection from '../../../data/__collection.json';
import boot from './boot.js';

export default class ContainerComponent extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
    this.data = _.find(collection, {'slug': this.props.params.any});
    if (this.data == undefined) {
      this.component = <div></div>;
      this.context.router.replace('/');
    } else {
      this.component = this.createComponent(boot[this.data.layout], this.data);
    }
  }

  createComponent(name, props = {}) {
    return React.createElement(name, props);
  }

  render() {
    return this.component
  }
}

ContainerComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};
