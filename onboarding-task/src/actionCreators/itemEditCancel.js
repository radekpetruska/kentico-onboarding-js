import actionTypes from './../constants/actionTypes';

function itemEditCancel(id) {
  return {
    type: actionTypes.ITEM_EDIT_CANCEL,
    payload: {
      id,
    },
  };
}

export default itemEditCancel;
