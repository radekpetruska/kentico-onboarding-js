import actionTypes from './../constants/actionTypes';

function itemDelete(id) {
  return {
    type: actionTypes.ITEM_DELETE,
    payload: {
      id,
    },
  };
}

export default itemDelete;
