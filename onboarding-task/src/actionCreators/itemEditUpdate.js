import actionTypes from './../constants/actionTypes';

function itemEditUpdate(id, item) {
  return {
    type: actionTypes.ITEM_EDIT_UPDATE,
    payload: {
      id,
      item,
    },
  };
}

export default itemEditUpdate;
