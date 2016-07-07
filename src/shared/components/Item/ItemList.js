import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  renderItems() {
    return this.props.items.map((item, i) => <Item key={i} {...item} />);
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            {this.renderItems()}
          </div>
        </div>
      </section>
    );
  }
}

ItemList.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default ItemList;
