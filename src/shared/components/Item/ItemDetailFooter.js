import React from 'react';

import styles from './ItemDetailFooter.css';
import '../App/App.css';

const ItemDetailFooter = props => {
  if (props.category === 'post') {
    return (
      <footer className={styles.footer}>
        Written by <a href="#">{props.author}</a> {' '}
        <span
          className={`glyphicon glyphicon-remove ${styles.separator}`}
          aria-hidden="true"
        ></span> {' '}
        {props.date} {' '}
        <span
          className={`glyphicon glyphicon-remove ${styles.separator}`}
          aria-hidden="true"
        ></span> {' '}
        <a href="#">{props.category}</a>
      </footer>
    );
  }

  return <div></div>;
};

ItemDetailFooter.propTypes = {
  author: React.PropTypes.string,
  category: React.PropTypes.string,
  date: React.PropTypes.string
};

export default ItemDetailFooter;
