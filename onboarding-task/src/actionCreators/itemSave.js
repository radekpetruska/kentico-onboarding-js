import actionTypes from './../constants/actionTypes';

function itemSave(id) {
  return {
    type: actionTypes.ITEM_SAVE,
    payload: {
      id,
    },
  };
}

export default itemSave;
