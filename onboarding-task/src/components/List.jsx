import React from 'react';
import Immutable from 'immutable';
import guid from '../utils/guid.js';
import items from '../data/items';
import CreateItem from './CreateItem';
import EditItem from './EditItem';
import Item from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);

    const itemsTmp = {};
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      itemsTmp[item.id] = Immutable.fromJS(item);
    }

    const editItemsMap = Immutable.Map();
    const itemsMap = Immutable.Map(itemsTmp);

    this.state = {
      itemsMap,
      editItemsMap
    };

    this._onItemSave = this._onItemSave.bind(this);
    this._onItemClick = this._onItemClick.bind(this);
    this._onItemDelete = this._onItemDelete.bind(this);
    this._onItemCreate = this._onItemCreate.bind(this);
    this._onItemCancel = this._onItemCancel.bind(this);
    this._onItemChange = this._onItemChange.bind(this);
    this._getItemToRender = this._getItemToRender.bind(this);
  }

  _onItemSave(id) {
    const editedItem = this.state.editItemsMap.get(id);
    const itemsMap = this.state.itemsMap.set(id, editedItem);
    const editItemsMap = this.state.editItemsMap.delete(id);

    this.setState({
      itemsMap,
      editItemsMap
    });
  }

  _onItemDelete(id) {
    let itemsMap = this.state.itemsMap.delete(id);
    let editItemsMap = this.state.editItemsMap.delete(id);

    this.setState({
      itemsMap,
      editItemsMap
    });
  }

  _onItemCreate(value) {
    const newGuid = guid();
    const newItem = Immutable.fromJS({
      id: newGuid,
      value
    });
    const itemsMap = this.state.itemsMap.set(newGuid, newItem);

    this.setState({ itemsMap });
  }

  _onItemClick(id) {
    var editItemsMap = this.state.editItemsMap.set(id, this.state.itemsMap.get(id));
    this.setState({ editItemsMap });
  }

  _onItemChange(newItem) {
    var editItemsMap = this.state.editItemsMap.set(newItem.get('id'), newItem);
    this.setState({ editItemsMap });
  }

  _onItemCancel(id) {
    let editItemsMap = this.state.editItemsMap.delete(id);
    this.setState({ editItemsMap });
  }

  _getItemToRender(id, index) {
    let itemsMap = this.state.itemsMap;
    let editItemsMap = this.state.editItemsMap;

    if (editItemsMap.get(id)) {
      return (
        <EditItem index={index}
                  item={editItemsMap.get(id)}
                  onChange={this._onItemChange}
                  onSave={this._onItemSave}
                  onCancel={this._onItemCancel}
                  onDelete={this._onItemDelete} />
      );
    }

    return (
      <Item key={id}
            index={index + 1}
            item={itemsMap.get(id)}
            onClick={this._onItemClick}
            onDelete={this._onItemDelete}
      />);
  }

  render() {
    const itemIds = this.state.itemsMap.keySeq().toArray();
    const itemsCode = itemIds.map((id, index) => (
      <li key={id} className="list-group-item">
        { this._getItemToRender(id, index) }
      </li>)
    );

    return (
      <div className="row">
        <div className="col-sm-12 col-md-offset-2 col-md-8">
          <ul className="list-group">
            { itemsCode }
            <li className="list-group-item">
              <CreateItem onCreate={this._onItemCreate} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
