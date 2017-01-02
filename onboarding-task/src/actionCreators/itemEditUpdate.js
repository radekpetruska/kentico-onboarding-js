import actionTypes from './../constants/actionTypes';

function itemEditUpdate(id, value) {
  return {
    type: actionTypes.ITEM_EDIT_UPDATE,
    payload: {
      id,
      value,
    },
  };
}

export default itemEditUpdate;
