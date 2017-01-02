import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import itemClick from '../actionCreators/itemClick.js';
import itemDelete from '../actionCreators/itemDelete.js';

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
           onClick={(e) => {
             e.stopPropagation();
             this.props.onDelete(id)
           }}>
          <span className="sr-only">Delete</span>
        </i>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => dispatch(itemClick(id)),
    onDelete: (id) => dispatch(itemDelete(id)),
  };
};

export default connect(() => {
  return {};
}, mapDispatchToProps)(Item);
