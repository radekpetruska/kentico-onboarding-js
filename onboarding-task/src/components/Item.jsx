import React from 'react';

class Item extends React.Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    value: React.PropTypes.string.isRequired,

    onSave: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      value: this.props.value,
    };

    this._onClick = this._onClick.bind(this);
    this._onSave = this._onSave.bind(this);
    this._onCancel = this._onCancel.bind(this);
    this._onDelete = this._onDelete.bind(this);
    this._getReadOnlyItem = this._getReadOnlyItem.bind(this);
    this._getEditableItem = this._getEditableItem.bind(this);
  }

  _onClick() {
    this.setState({ isInEditMode: true });
  }

  _onSave() {
    this.props.onSave(this.state.value);
    this.setState({ isInEditMode: false });
  }

  _onCancel() {
    this.setState({ value: this.props.value });
    this.setState({
      isInEditMode: false,
    });
  }

  _onDelete() {
    this.props.onDelete();
  }

  _getReadOnlyItem() {
    return <div onClick={this._onClick}>{ `${this.props.index}. ${this.props.value}` }</div>;
  }

  _getEditableItem() {

    return (
      <div className="form-inline">
        {this.props.index}.&nbsp;
        <input value={this.state.value}
               className="form-control"
               onChange={(e) => this.setState({ value: e.target.value })} />
        <button className="btn btn-primary" onClick={this._onSave}>Save</button>
        <button className="btn btn-default" onClick={this._onCancel}>Cancel</button>
        <button className="btn btn-danger" onClick={this._onDelete}>Delete</button>
      </div>
    );
  }

  render() {
    return (this.state.isInEditMode) ? this._getEditableItem() : this._getReadOnlyItem();
  }
}

export default Item;
