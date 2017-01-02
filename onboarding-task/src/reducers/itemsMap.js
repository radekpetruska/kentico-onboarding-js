import Immutable from 'immutable';
import items from './../data/items';

const defaultItems = {};
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  defaultItems[item.id] = Immutable.fromJS(item);
}

function itemsMap(state = Immutable.Map(defaultItems), action) {
  switch (action.type) {
    default: return state;
  }
}

export default itemsMap;
