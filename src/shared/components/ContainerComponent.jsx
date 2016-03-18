import React from 'react';
import _ from 'lodash';
import collection from '../../../data/__collection.json';
import boot from './boot.js';

export default class ContainerComponent extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
    this.components = boot;
    this.data = _.find(collection, {'slug': this.props.params.any});

    /*
    if (this.data == undefined) {
      this.context.router.replace('/');
    }
    */
  }

  render() {
    return React.createElement(this.components[this.data.layout], this.data);
  }
}

ContainerComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};
