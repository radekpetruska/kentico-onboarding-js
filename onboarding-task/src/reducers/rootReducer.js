import itemsMap from './itemsMap';
import editItemsMap from './editItemsMap';

function rootReducer(state = {}, action) {
  return {
    itemsMap,
    editItemsMap,
  };
}

export default rootReducer;
