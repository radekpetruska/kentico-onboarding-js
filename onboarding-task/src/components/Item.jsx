import React from 'react';

class Item extends React.Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    item: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
    }).isRequired,

    onClick: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
  };

  render() {
    const id = this.props.item.id;

    return (
      <div onClick={() => this.props.onClick(id)}>
        { `${this.props.index}. ${this.props.item.value}` }
        <i className="glyphicon glyphicon-remove pull-right"
           onClick={() => this.props.onDelete(id)}>
          <span className="sr-only">Delete</span>
        </i>
      </div>
    );
  }
}

export default Item;
