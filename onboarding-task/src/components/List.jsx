import React from 'react';
import nextId from '../utils/idGenerator.js';
import CreateItem from './CreateItem';
import Item from './Item';


class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        [nextId()]: 'Buy milk',
        [nextId()]: 'Master React',
        [nextId()]: 'Learn Redux',
        [nextId()]: 'Help making Draft awesome',
      },
    }

    this._onItemSave = this._onItemSave.bind(this);
    this._onItemDelete = this._onItemDelete.bind(this);
    this._onItemCreate = this._onItemCreate.bind(this);
  }

  _onItemSave(id, value) {
    const items = Object.assign({}, this.state.items, { [id]: value }) ;
    this.setState({ items });
  }

  _onItemDelete(id) {
    let items = Object.assign({}, this.state.items);
    delete items[id];
    this.setState({ items });
  }

  _onItemCreate(value) {
    let items = Object.assign({}, this.state.items, { [nextId()]: value });
    this.setState({ items });
  }

  render() {
    let items = this.state.items;
    const itemIds = Object.keys(items);
    const itemsCode = itemIds.map((id, index) => (
      <li key={id} className="list-group-item">
        <Item key={id}
              index={index + 1}
              value={items[id]}
              onSave={(val) => this._onItemSave(id, val)}
              onDelete={() => this._onItemDelete(id)}
        />
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
