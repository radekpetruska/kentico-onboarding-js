import React from 'react';
import { connect } from 'react-redux';
import CreateItem from './CreateItem';
import EditItem from './EditItem';
import Item from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);
    this._getItemToRender = this._getItemToRender.bind(this);
  }

  _getItemToRender(id, index) {
    let itemsMap = this.props.itemsMap;

    if (itemsMap.getIn([id, '_editValue'])) {
      return (
        <EditItem key={id}
                  index={index + 1}
                  item={itemsMap.get(id)} />
      );
    }

    return (
      <Item key={id}
            index={index + 1}
            item={itemsMap.get(id)} />);
  }

  render() {
    const itemIds = this.props.itemsMap.keySeq().toArray();
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
              <CreateItem />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsMap: state.itemsMap,
  };
};

export default connect(mapStateToProps)(List);
