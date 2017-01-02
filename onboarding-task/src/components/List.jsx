import React from 'react';
import guid from '../utils/guid.js';
import items from '../data/items';
import CreateItem from './CreateItem';
import EditItem from './EditItem';
import Item from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);

    const editItemsMap = {};
    const itemsMap = {};
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      itemsMap[item.id] = item;
    }

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
    const editItemsMap = Object.assign({}, this.state.editItemsMap);
    const itemsMap = Object.assign({}, this.state.itemsMap, { [id]: editItemsMap[id] });
    delete editItemsMap[id];

    this.setState({
      itemsMap,
      editItemsMap
    });
  }

  _onItemDelete(id) {
    let itemsMap = Object.assign({}, this.state.itemsMap);
    let editItemsMap = Object.assign({}, this.state.editItemsMap);
    delete itemsMap[id];
    delete editItemsMap[id];

    this.setState({
      itemsMap,
      editItemsMap
    });
  }

  _onItemCreate(value) {
    const newGuid = guid();
    const newItem = {
      id: newGuid,
      value
    };
    const itemsMap = Object.assign({}, this.state.itemsMap, { [newGuid]: newItem });

    this.setState({ itemsMap });
  }

  _onItemClick(id) {
    var editItemsMap = Object.assign({}, this.state.editItemsMap, { [id]: this.state.itemsMap[id] });
    this.setState({ editItemsMap });
  }

  _onItemChange(newItem) {
    var editItemsMap = Object.assign({}, this.state.editItemsMap, { [newItem.id]: newItem });
    this.setState({ editItemsMap });
  }

  _onItemCancel(id) {
    let editItemsMap = Object.assign({}, this.state.editItemsMap);
    delete editItemsMap[id];
    this.setState({ editItemsMap });
  }

  _getItemToRender(id, index) {
    let itemsMap = this.state.itemsMap;
    let editItemsMap = this.state.editItemsMap;

    if (editItemsMap[id]) {
      return (
        <EditItem index={index}
                  item={editItemsMap[id]}
                  onChange={this._onItemChange}
                  onSave={this._onItemSave}
                  onCancel={this._onItemCancel}
                  onDelete={this._onItemDelete} />
      );
    }

    return (
      <Item key={id}
            index={index + 1}
            item={itemsMap[id]}
            onClick={this._onItemClick}
            onDelete={this._onItemDelete}
      />);
  }

  render() {
    const itemIds = Object.keys(this.state.itemsMap);
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
