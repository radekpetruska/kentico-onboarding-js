import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import itemSave from '../actionCreators/itemSave.js';
import itemEditUpdate from '../actionCreators/itemEditUpdate.js';
import itemEditCancel from '../actionCreators/itemEditCancel.js';
import itemDelete from '../actionCreators/itemDelete.js';

class EditItem extends React.Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    item: React.PropTypes.instanceOf(Immutable.Map).isRequired,

    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
  };

  _onChange({ value }) {
    this.props.onChange(this.props.item.get('id'), value);
  }

  render() {
    const id = this.props.item.get('id');

    return (
      <div className="form-inline">
        {this.props.index}.&nbsp;
        <input value={this.props.item.get('_editValue')}
               className="form-control"
               onChange={(e) => this._onChange({ value: e.target.value })} />
        <button className="btn btn-primary" onClick={() => this.props.onSave(id)}>Save</button>
        <button className="btn btn-default" onClick={() => this.props.onCancel(id)}>Cancel</button>
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
    onSave: (id) => dispatch(itemSave(id)),
    onChange: (id, item) => dispatch(itemEditUpdate(id, item)),
    onCancel: (id) => dispatch(itemEditCancel(id)),
    onDelete: (id) => dispatch(itemDelete(id)),
  };
};

export default connect(() => {
  return {};
}, mapDispatchToProps)(EditItem);
