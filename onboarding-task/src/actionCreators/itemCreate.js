import Immutable from 'immutable';
import actionTypes from './../constants/actionTypes';
import guid from '../utils/guid.js';

function itemCreate(value) {
  const newGuid = guid();
  const newItem = Immutable.fromJS({
    id: newGuid,
    value
  });

  return {
    type: actionTypes.ITEM_CREATE,
    payload: {
      id: newGuid,
      item: newItem,
    },
  };
}

export default itemCreate;
