import Immutable from 'immutable';
import actionTypes from '../constants/actionTypes';
import items from './../data/items';

const defaultItems = {};
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  defaultItems[item.id] = Immutable.fromJS(item);
}

function itemMap(state = Immutable.Map(), action) {
  switch (action.type) {
    case actionTypes.ITEM_CLICK: {
      return state.set('_editValue', state.get('value'));
    }
    case actionTypes.ITEM_EDIT_CANCEL: {
      return state.delete('_editValue');
    }
    case actionTypes.ITEM_EDIT_UPDATE: {
      return state.set('_editValue', action.payload.value);
    }
    case actionTypes.ITEM_SAVE: {
      var tmpState = state.set('value', state.get('_editValue'));
      return tmpState.delete('_editValue');
    }
    default: {
      return state;
    }
  }
}

function itemsMap(state = Immutable.Map(defaultItems), action) {
  const id = action.payload && action.payload.id;

  switch (action.type) {
    case actionTypes.ITEM_CREATE: {
      const newItem = action.payload.item;
      return state.set(id, newItem);
    }
    case actionTypes.ITEM_DELETE: {
      return state.delete(id);
    }
    case actionTypes.ITEM_CLICK:
    case actionTypes.ITEM_EDIT_CANCEL:
    case actionTypes.ITEM_EDIT_UPDATE:
    case actionTypes.ITEM_SAVE: {
      const item = state.get(id);
      const newItem = itemMap(item, action);
      return state.set(id, newItem);
    }
    default: {
      return state;
    }
  }
}

export default itemsMap;
