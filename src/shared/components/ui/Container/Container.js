import React from 'react';

const Container = (props) => (
  <div className={props.fluid === '' ? 'container-fluid' : 'container'}>
    {props.children}
  </div>
);

Container.propTypes = {
  full: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default Container;
