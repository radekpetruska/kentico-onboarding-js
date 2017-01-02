import React from 'react';
import Immutable from 'immutable';

class Item extends React.Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    item: React.PropTypes.instanceOf(Immutable.Map).isRequired,

    onClick: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
  };

  render() {
    const id = this.props.item.get('id');

    return (
      <div onClick={() => this.props.onClick(id)}>
        { `${this.props.index}. ${this.props.item.get('value')}` }
        <i className="glyphicon glyphicon-remove pull-right"
           onClick={() => this.props.onDelete(id)}>
          <span className="sr-only">Delete</span>
        </i>
      </div>
    );
  }
}

export default Item;
