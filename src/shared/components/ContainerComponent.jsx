import React from 'react';
import _ from 'lodash';
import collection from '../../../data/__collection.json';
import boot from './boot.js';

export default class ContainerComponent extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
  }

  getComponent() {
    let component;
    this.data = _.find(collection, {'slug': this.props.location.pathname});
    if (this.data == undefined) {
      component = <div></div>;
      this.context.router.replace('/');
    } else {
      component = React.createElement(boot[this.data.layout], this.data);
    }
    return component;
  }

  render() {
    return this.getComponent()
  }
}

ContainerComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};
