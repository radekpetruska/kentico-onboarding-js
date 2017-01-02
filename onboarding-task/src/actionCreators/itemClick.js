import actionTypes from './../constants/actionTypes';

function itemClick(id) {
  return {
    type: actionTypes.ITEM_CLICK,
    payload: {
      id,
    },
  };
}

export default itemClick;
