import React from 'react';
import { Link } from 'react-router';
import style from './Item.css';

const Item = props => (
  <div className="col-md-6">
    <article className={style.item} style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <Link to={props.route}>
        <h3>{props.title}</h3>
      </Link>
    </article>
  </div>
);

Item.propTypes = {
  backgroundImage: React.PropTypes.string,
  route: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Item;
