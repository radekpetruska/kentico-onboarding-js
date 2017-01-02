import React from 'react';
import Immutable from 'immutable';

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
    const changedItem = this.props.item.set('value', value);
    this.props.onChange(changedItem);
  }

  render() {
    const id = this.props.item.get('id');

    return (
      <div className="form-inline">
        {this.props.index}.&nbsp;
        <input value={this.props.item.get('value')}
               className="form-control"
               onChange={(e) => this._onChange({ value: e.target.value })} />
        <button className="btn btn-primary" onClick={() => this.props.onSave(id)}>Save</button>
        <button className="btn btn-default" onClick={() => this.props.onCancel(id)}>Cancel</button>
        <i className="glyphicon glyphicon-remove pull-right"
           onClick={() => this.props.onDelete(id)}>
          <span className="sr-only">Delete</span>
        </i>
      </div>
    );
  }
}

export default EditItem;
