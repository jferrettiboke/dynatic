import React from 'react';
import _ from 'lodash';
import boot from '../components/boot';
import collection from '../../../dynatic/collection';

export default class DynaticContainer extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
  }

  getRouteData() {
    const data = _.find(collection, { route: this.props.location.pathname });

    if (data === undefined) {
      console.error('Route not found');
      alert('Route not found');
      this.context.router.replace('/');
    }

    return data;
  }

  getComponent() {
    let component;

    this.data = this.getRouteData();

    if (this.data === undefined) {
      component = <div></div>;
      this.context.router.replace('/');
    } else {
      component = React.createElement(boot[this.data.layout], this.data);
    }

    return component;
  }

  render() {
    return (
      <div>{this.getComponent()}</div>
    );
  }
}

DynaticContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};


DynaticContainer.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired
  })
};
