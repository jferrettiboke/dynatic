import React from 'react';
import styles from './Header.css';

const Header = props => (
  <div
    className={styles.header}
    style={{
      backgroundImage: `url(${props.backgroundImage})`,
      height: props.height === 'full' ? '100vh' : props.height,
      lineHeight: props.height === 'full' ? '100vh' : props.height
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <h1 style={{ color: props.color }}>{props.title}</h1>
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  backgroundImage: React.PropTypes.string,
  color: React.PropTypes.string,
  height: React.PropTypes.string,
  title: React.PropTypes.string
};

export default Header;
