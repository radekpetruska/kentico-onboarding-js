import actionTypes from './../constants/actionTypes';

function itemCreate(value) {
  const newGuid = guid();
  const newItem = Immutable.fromJS({
    id: newGuid,
    value
  });

  return {
    type: actionTypes.ITEM_CREATE,
    payload: {
      item: newItem,
    },
  };
}

export default itemCreate;
