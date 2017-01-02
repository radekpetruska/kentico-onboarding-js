import itemsMap from './itemsMap';

function rootReducer(state = {}, action) {
  return {
    itemsMap: itemsMap(state.itemsMap, action),
  };
}

export default rootReducer;
